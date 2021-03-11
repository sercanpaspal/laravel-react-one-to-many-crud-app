<?php

namespace App\Http\Controllers;

use App\Http\Requests\PersonSaveRequest;
use App\Http\Resources\PersonResource;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        return PersonResource::collection(Person::withCount(['addresses'])->orderBy('created_at', 'desc')->paginate());
    }

    public function edit($id)
    {
        return PersonResource::make(Person::with(['addresses' => function ($q) {
            $q->orderBy('created_at', 'desc');
        }])->where('id', $id)->firstOrFail());
    }

    public function store(PersonSaveRequest $request)
    {
        return Person::create($request->validated());
    }

    public function update(PersonSaveRequest $request, $id)
    {
        return Person::findOrFail($id)->update($request->validated());
    }

    public function destroy($id)
    {
        return Person::destroy($id);
    }
}
