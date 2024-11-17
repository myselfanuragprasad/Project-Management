<?php

namespace App\Http\Controllers\Client;

use App\Models\Role;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Client\ClientRole;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Client\ClientPermission;
use App\Http\Requests\Client\Role\RoleUpdateRequest;
use App\Http\Requests\Client\Role\RoleIndexRequest;

class ClientRoleController extends Controller
{
    public function index(RoleIndexRequest $request)
    {
        $roles = ClientRole::query()->with('client_permissions')->orderBy('id', 'DESC');

        if ($request->has('search')) {
            $roles->where('name', 'LIKE', "%" . $request->search . "%");
            $roles->orWhere('guard_name', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $roles->orderBy($request->field, $request->order);
        }

        $role = auth()->user()->clientRoles->pluck('name')[0];
        // dd($role);
        // $permissions = Permission::latest();
        $permissions = ClientPermission::latest()->get();
        $viewpermissions = ClientPermission::latest()->get()->groupBy('module_name');

        $perPage = $request->has('perPage') ? $request->perPage : 10;
        return Inertia::render('Client/Role/Index', [
            'title'         => __('app.label.role'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'roles'         => $roles->paginate($perPage),
            'permissions'   => $permissions,
            'allpermissions'   => $viewpermissions,
            'breadcrumbs'   => [['label' => __('app.label.role'), 'href' => route('clientrole.index')]],
        ]);
    }

    public function updateRole(RoleUpdateRequest $request, $role)
    {

        DB::beginTransaction();
        try {
            // Fetch the client role associated with the global role ID from request
            $clientRole = DB::table('client_roles')->where('id', $request->role_id)->first();

            if (!$clientRole) {
                return response()->json(['message' => 'Client role not found'], 404);
            }

            if ($request->user_types == "client") {
                // Update the role name
                $findRole = Role::find($clientRole->global_role_id);
                $findRole->update([
                    'name' => $request->name,
                ]);

                // Fetch the current permissions for the role
                $currentPermissions = DB::table('role_has_permissions')
                    ->where('role_id', $clientRole->global_role_id)
                    ->pluck('permission_id')->toArray();  // Get permission IDs associated with the global role

                // Loop through the provided permissions
                foreach ($request->permissions as $permissionId) {
                    // Fetch the client permission based on the provided permission ID
                    $clientPermission = DB::table('client_permissions')->where('id', $permissionId)->first();

                    if (!$clientPermission) {
                        return response()->json(['message' => "Permission with ID {$permissionId} not found"], 404);
                    }

                    // Get the global_permission_id from client_permissions
                    $globalPermissionId = $clientPermission->global_permission_id;

                    // Check if the combination of role_id (from client_role) and permission_id (global_permission_id) exists in role_has_permissions
                    $existingRecord = DB::table('role_has_permissions')
                        ->where('role_id', $clientRole->global_role_id)
                        ->where('permission_id', $globalPermissionId)
                        ->first();

                    // If the record exists, continue with the next permission (skip insert)
                    if ($existingRecord) {
                        continue;  // Skip this permission and move to the next one
                    }

                    // If no matching record, insert a new record into role_has_permissions table
                    DB::table('role_has_permissions')->insert([
                        'role_id' => $clientRole->global_role_id,
                        'permission_id' => $globalPermissionId,
                    ]);
                }

                // Now handle the deletion of permissions that are no longer in the request's permissions
                // Convert request permissions to global_permission_ids
                $requestPermissions = array_map(function ($permissionId) {
                    $clientPermission = DB::table('client_permissions')->where('id', $permissionId)->first();
                    return $clientPermission ? $clientPermission->global_permission_id : null;
                }, $request->permissions);

                // Remove any null values in case of invalid permission IDs
                $requestPermissions = array_filter($requestPermissions);

                // Find permissions to delete: those that are in current permissions but not in the request
                $permissionsToDelete = array_diff($currentPermissions, $requestPermissions);

                if (!empty($permissionsToDelete)) {
                    // Delete the permissions that no longer exist in the request
                    DB::table('role_has_permissions')
                        ->where('role_id', $clientRole->global_role_id)
                        ->whereIn('permission_id', $permissionsToDelete)
                        ->delete();
                }
            }
            // dd('test');
            $roleModalName = 'App\Models\Client\ClientRole';
            $permissionModalName = 'App\Models\Client\ClientPermission';
            $guard_name = 'client';
            $pivot_table = 'client_role_has_permissions';
            assignRoles($clientRole->global_role_id, $guard_name, $roleModalName);
            assignPermissions($clientRole->global_role_id, $permissionModalName);
            assignRoleHasPermissions($clientRole->global_role_id, $permissionModalName, $roleModalName, $pivot_table);

            DB::commit();
            return back()->with('success', __('app.label.updated_successfully', ['name' => $clientRole->name]));
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', __('app.label.updated_error', ['name' => $clientRole->name]) . $th->getMessage());
        }
    }
}
