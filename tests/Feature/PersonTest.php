<?php

namespace Tests\Feature;

use App\Models\Person;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PersonTest extends TestCase
{
    use WithFaker;
    
    public function test_store()
    {
        $response = $this->postJson('/api/person', [
            'name' => $this->faker->name,
            'birthday' => $this->faker->date('Y-m-d', 'now'),
            'gender' => $this->faker->randomElement([0, 1])
        ]);

        $response->assertStatus(201);
    }

    public function test_paginate()
    {
        $response = $this->getJson('/api/person?page=1');

        $response->assertStatus(200);

        $response->assertJsonStructure(['data' => ['*' => ['id', 'name', 'birthday', 'gender']], 'meta']);
    }

    public function test_edit()
    {
        $person = Person::firstOrFail();

        $response = $this->getJson('/api/person/' . $person->id . '/edit');

        $response->assertStatus(200);

        $response->assertJsonStructure(['id', 'name', 'birthday', 'gender', 'addresses']);
    }

    public function test_update()
    {
        $person = Person::firstOrFail();

        $response = $this->putJson('/api/person/' . $person->id, [
            'name' => $this->faker->name,
            'birthday' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'gender' => $this->faker->randomElement([0, 1])
        ]);

        $response->assertStatus(200);
    }

    public function test_delete()
    {
        $person = Person::firstOrFail();

        $response = $this->deleteJson('/api/person/' . $person->id);

        $response->assertStatus(200);
    }
}
