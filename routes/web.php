<?php

use App\Models\Role;
use App\Models\Task;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Permission;
use App\Http\Controllers\FacebookSDK;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome.page');


Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard', [
        'tasks'         => (int) Task::count(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/setLang/{locale}', function ($locale) {
    Session::put('locale', $locale);
    return back();
})->name('setlang');

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/user', UserController::class)->except('create', 'show', 'edit');
    //client crud route

    Route::get('/page/welcome', [AuthenticatedSessionController::class, 'userWelcomePage'])->name('internaluser.welcome');
    //admin dashboard routes

    Route::post('/user/destroy-bulk', [UserController::class, 'destroyBulk'])->name('user.destroy-bulk');

    Route::resource('/role', RoleController::class)->except('create', 'show', 'edit');
    Route::post('/role/destroy-bulk', [RoleController::class, 'destroyBulk'])->name('role.destroy-bulk');

    Route::resource('/permission', PermissionController::class)->except('create', 'show', 'edit');
    Route::post('/permission/destroy-bulk', [PermissionController::class, 'destroyBulk'])->name('permission.destroy-bulk');

    // task crud routes
    Route::group(['prefix' => 'task'], function () {

        Route::get('/dashboard', [TaskController::class, 'index'])->name('tasklist.dashboard');

        Route::post('/store', [TaskController::class, 'store'])->name('task.store');

        Route::get('/edit/{id}', [TaskController::class, 'edit'])->name('task.edit');

        Route::post('/update/{id}', [TaskController::class, 'update'])->name('task.update');

        Route::delete('/delete/{id}', [TaskController::class, 'destroy'])->name('task.destroy');

        Route::post('/deleteAll', [TaskController::class, 'destroyBulk'])->name('task.destroybulk');
    });
});



// Route::middleware('auth', 'verified')->group(function () {
//     // Route::get('/users', [FacebookSDK::class, 'index'])->name('fbsdk.view');

//     Route::get('/users/{id}', [FacebookSDK::class, 'index']);
// });


require __DIR__ . '/auth.php';
