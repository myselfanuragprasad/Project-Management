<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClientController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Routes protected by JWT middleware
Route::middleware('auth:api')->group(function () {
    Route::get('all-clients', [ClientController::class, 'index']);
    Route::get('client/{id}', [ClientController::class, 'show']);
    Route::get('client/{id}/location/{location}', [ClientController::class, 'locationDetails']);
    Route::get('client/{id}/spoc/{spoc}', [ClientController::class, 'spocDetails']);
    Route::get('client/{id}/vaccancy/{vaccancy}', [ClientController::class, 'vaccancyDetails']);
});
