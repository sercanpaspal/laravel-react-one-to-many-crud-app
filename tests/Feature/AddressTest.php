<?php

namespace Tests\Feature;

use App\Models\Address;
use App\Models\Person;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AddressTest extends TestCase
{
    use WithFaker;
    
    public function test_store()
    {
        $person = Person::factory()->create();

        $response = $this->post('/api/address', [
            'address' => $this->faker->address,
            'post_code' => $this->faker->postcode,
            'city_name' => $this->faker->city,
            'country_name' => $this->faker->country,
            'person_id' => $person->id,
        ]);

        $response->assertStatus(201);
    }

    public function test_update()
    {
        $address = Address::factory()->create();

        $response = $this->putJson('/api/address/' . $address->id, [
            'address' => $this->faker->address,
            'post_code' => $this->faker->postcode,
            'city_name' => $this->faker->city,
            'country_name' => $this->faker->country,
        ]);

        $response->assertStatus(200);
    }

    public function test_delete()
    {
        $address = Address::firstOrFail();

        $response = $this->deleteJson('/api/person/' . $address->id);

        $response->assertStatus(200);
    }
}
