<?php

namespace App\Http\Controllers\Client\Auth;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Models\Client\ClientRole;
use App\Models\Client\ClientUser;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Models\Client\ClientPermission;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\Client\Auth\ClientLoginRequest;

class ClientLoginController extends Controller
{
    public function showLoginForm(): Response
    {

        return Inertia::render('Client/Auth/ClientLogin');
    }


    public function login(ClientLoginRequest $request)
    {
        try {
            $client = ClientUser::where('email', $request->email)->first();
            if ($client == NULL || !(Hash::check($request->password, $client->password))) {

                return back()->with('error', __('app.label.login_error', ['name' => 'This User Does Not Exist']));
            }
            if($client)
            {
                $request->authenticate();

                // Regenerate session
                $request->session()->regenerate();

                $clientUser = auth('client')->user();
            // Check client status and redirect accordingly
            if ($client->role_id === 'Not Assigned') {
                    return redirect()->route('client.welcome');
            } else {
                    // Authenticate the user
                   
                return redirect()->route('clientuser.dashboard');
            }
        }
        } catch (\Illuminate\Auth\AuthenticationException $e) {
            // Handle authentication failure specifically
            return back()->withErrors(['email' => 'Invalid email or password.']);
        } catch (\Exception $e) {
            // Handle other exceptions (e.g., log the error, display a general message)
            return back()->withErrors(['email' => 'An error occurred. Please try again.']);
        }
    }



    public function index()
    {
        return Inertia::render('Client/CustomWelcome');
    }

    public function dashboard()
    {
        return Inertia::render('Client/ClientDashboard', [
           
            'roles'         => (int) ClientRole::count(),
            'permissions'   => (int) ClientPermission::count(),
        ]);
    }

    public function logout(Request $request): RedirectResponse
    {

        Auth::guard('client')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('client/page/login');
    }
}
