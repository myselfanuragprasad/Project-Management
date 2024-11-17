<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => 'delete user']);
        Permission::create(['name' => 'update user']);
        Permission::create(['name' => 'read user']);
        Permission::create(['name' => 'create user']);
        Permission::create(['name' => 'create client']);
        Permission::create(['name' => 'create SPOC']);
        Permission::create(['name' => 'create vaccancy']);
        Permission::create(['name' => 'create location']);

        Permission::create(['name' => 'delete role']);
        Permission::create(['name' => 'update role']);
        Permission::create(['name' => 'read role']);
        Permission::create(['name' => 'create role']);
        Permission::create(['name' => 'delete client']);
        Permission::create(['name' => 'update client']);
        Permission::create(['name' => 'update SPOC']);
        Permission::create(['name' => 'update vaccancy']);
        Permission::create(['name' => 'update location']);

        Permission::create(['name' => 'delete permission']);
        Permission::create(['name' => 'update permission']);
        Permission::create(['name' => 'read permission']);
        Permission::create(['name' => 'create permission']);
        Permission::create(['name' => 'read client']);

        Permission::create(['name' => 'read task']);
        Permission::create(['name' => 'create task']);
        Permission::create(['name' => 'update task']);
        Permission::create(['name' => 'delete task']);
      
    }
}
