<?php

namespace App\Http\Controllers\Client;

use Inertia\Inertia;
use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LeadController extends Controller
{
    public function index(Request $request)
    {
      
        return Inertia::render('Client/Lead/Index', [
            'title'         => __('app.label.leads'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'breadcrumbs'   => [['label' => __('app.label.leads'), 'href' => route('clientlead.index')]],
        ]);
    }
}
