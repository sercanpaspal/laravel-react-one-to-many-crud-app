<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'birthday', 'gender'];

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}
