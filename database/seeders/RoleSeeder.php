<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $superadmin = Role::create([
            'name'          => 'superadmin'
        ]);
        $superadmin->givePermissionTo([
            'read task',
            'create task',
            'update task',
            'delete task',
            'delete user',
            'update user',
            'read user',
            'create user',
            'delete client',
            'update client',
            'read client',
            'create client',
            'delete role',
            'update role',
            'read role',
            'create role',
            'delete permission',
            'update permission',
            'read permission',
            'create permission',
            'create SPOC',
            'create vaccancy',
            'update SPOC',
            'update vaccancy',
            'create location',
            'update location',
        ]);
        $admin = Role::create([
            'name'          => 'admin'
        ]);
        $admin->givePermissionTo([
            'delete user',
            'update user',
            'read user',
            'create user',
            'update client',
            'read client',
            'create client',
            'read role',
            'read permission',
            'create SPOC',
            'create vaccancy',
            'update SPOC',
            'update vaccancy',
            'create location',
            'update location',
        ]);
        $operator = Role::create([
            'name'          => 'operator'
        ]);
        
        $operator->givePermissionTo([
            'read user',
            'read client',
            'create user',
            'read role',
            'read permission',
        ]);
    }
}
