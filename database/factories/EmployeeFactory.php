<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Employee;
use Faker\Generator as Faker;

$factory->define(Employee::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'address' => $faker->address(),
        'join_date' => now()->subYear(rand(1, 15)),
        'nid' => $faker->randomNumber(9),
        'phone' => $faker->phoneNumber(),
        'salary' => $faker->randomNumber(6)
    ];
});
