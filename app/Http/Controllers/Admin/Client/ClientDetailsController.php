<?php

namespace App\Http\Controllers\Admin\Client;

use App\Models\Role;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Client\ClientRole;
use App\Models\Client\ClientUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class ClientDetailsController extends Controller
{
    public function clientUserList(Request $request)
    {

        $clientList = ClientUser::query();


        if ($request->has('search')) {
            $clientList->where('client_name', 'LIKE', "%" . $request->search . "%");
            $clientList->orWhere('email', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $clientList->orderBy($request->field, $request->order);
        }
        $perPage = $request->has('perPage') ? $request->perPage : 10;
        // $role = auth()->user()->clientRoles->pluck('name')[0];
        $roles = Role::get();

        return Inertia::render('Admin/Client/ClientList', [
            'title'         => __('app.label.client'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'clients'         => $clientList->paginate($perPage),
            'roles'         => $roles,
            'breadcrumbs'   => [['label' => __('app.label.client'), 'href' => route('clientuser.list')]],
        ]);
    }

    public function updateClient(Request $request, $id)
    {
       
        DB::beginTransaction();
        try {
            $client = ClientUser::findOrFail($id);
            $role = Role::where('name',$request->role)->first();
            $client->update([
                'client_name' => $request->client_name,
                'email'     => $request->email,
                'role_id' => $role->id,
                'client_status' => 1,
                'reporting_to' => $request->reporting_manager

            ]);

            $roleModalName = 'App\Models\Client\ClientRole';
            $permissionModalName = 'App\Models\Client\ClientPermission';
            $guard_name = 'client';
            $pivot_table = 'client_role_has_permissions';
            $pivot_second_table = 'client_model_has_roles';
            assignRoles($role->id, $guard_name, $roleModalName);
            assignPermissions($role->id, $permissionModalName);
            assignRoleHasPermissions($role->id, $permissionModalName, $roleModalName, $pivot_table);
            assignclientModelHasRoles($role->id, $request->client_id,  $pivot_second_table);
         
            DB::commit();
            return back()->with('success', __('app.label.updated_successfully', ['name' => $request->client_name]));
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', __('app.label.updated_error', ['name' => $request->client_name]) . $th->getMessage());
        }
    }
   
}
