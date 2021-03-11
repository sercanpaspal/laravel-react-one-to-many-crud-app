<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = ['person_id', 'address', 'post_code', 'city_name', 'country_name'];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
