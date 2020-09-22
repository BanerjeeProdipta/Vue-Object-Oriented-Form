<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = request()->validate([
            'name' => 'required',
            'description' => 'required'
        ]);
        Project::create($validated);
        return ['message'=>'Project Created'];
    }

}