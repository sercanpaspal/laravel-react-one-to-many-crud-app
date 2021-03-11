<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'birthday' => $this->birthday,
            'gender' => $this->gender,
            'genderText' => $this->gender ? 'Erkek' : 'Kadın',
            'addresses_count' => $this->when($this->addresses_count, $this->addresses_count),
            'addresses' => AddressResource::collection($this->whenLoaded('addresses')),
        ];
    }
}
