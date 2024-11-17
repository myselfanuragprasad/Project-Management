<?php

namespace App\Http\Controllers\Client\Auth;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Client;
use Illuminate\Http\Request;
use App\Models\Client\ClientUser;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules\Password;

class ClientRegisterController extends Controller
{

    public function showRegistrationForm(): Response
    {
        $clients = Client::all();
       
        return Inertia::render('Client/Auth/ClientRegister', [
            'clients' => $clients,  // Sending the $clients data to the Inertia component
        ]);
    }

    public function Register(Request $request): RedirectResponse
    {
        
        try {
            // Validate the request data
            // $request->validate([
            //     'client_name' => 'required|string|max:255',
            //     'client_email' => 'required|string|email|max:255|unique:' . ClientUser::class,
            //     'client_password' => ['required', 'confirmed', Password::defaults()],
            // ]);

            // Create a new client user
            $user = ClientUser::create([
                'client_name' => $request->client_name,
                'email' => $request->client_email,
                'password' => Hash::make($request->client_password),
                'client_status' => 0,
                'user_type'=> 'CLIENT USER',
                'role_id' => 'Not Assigned',
                'client_id' => $request->client_id,
            ]);

            // Check if user creation was successful
            if ($user) {

                // Redirect to the specified route with success message
                return Redirect::route('client.registerpage')
                    ->with([
                        'success' => __('app.label.registered_successfully', ['name' => $request->client_name]),
                    ]);
            }
        } catch (\Exception $e) {
            // Handle any exceptions that occur during registration
            return redirect()->back()
                ->withErrors(['error' => __('app.label.created_error', ['name' => 'Client User'])])
                ->withInput();
        }
    }

}
