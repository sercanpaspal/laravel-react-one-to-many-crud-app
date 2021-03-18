<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddressStoreRequest;
use App\Http\Requests\AddressUpdateRequest;
use App\Http\Resources\AddressResource;
use App\Models\Address;

class AddressController extends Controller
{

    public function store(AddressStoreRequest $request)
    {
        return AddressResource::make(Address::create($request->validated()));
    }

    public function update(AddressUpdateRequest $request, $id)
    {
        return AddressResource::make(tap(Address::findOrfail($id))->update($request->validated()));
    }

    public function destroy($id)
    {
        return Address::destroy($id);
    }
}
