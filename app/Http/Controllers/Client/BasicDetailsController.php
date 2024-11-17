<?php

namespace App\Http\Controllers\Client;

use App\Models\Role;
use Inertia\Inertia;
use App\Models\Client;
use Illuminate\Http\Request;
use App\Models\Client\ClientRole;
use App\Models\Client\ClientUser;
use App\Http\Controllers\Controller;

class BasicDetailsController extends Controller
{
  

    public function clientUserList(Request $request)
    {
        $clientList = ClientUser::join('client_roles', 'client_roles.d','=', 'client_users.role_id');

        $clientLists = Client::all();

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
       
        return Inertia::render('Client/ClientList', [
            'title'         => __('app.label.client'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'clients'         => $clientList->paginate($perPage),
            'clientLists' => $clientLists,
            'roles'         => $roles,
            'breadcrumbs'   => [['label' => __('app.label.client'), 'href' => route('clientuser.list')]],
        ]);
    }
}
