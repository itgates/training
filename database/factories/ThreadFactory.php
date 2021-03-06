<?php

namespace Database\Factories;

use App\Models\Thread;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ThreadFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Thread::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition(): array
  {
    return [
      "title" => $this->faker->sentence(),
      "description" => $this->faker->paragraph(),
      "user_id" => function() {
        return User::factory()->create()->id;
      }
    ];
  }
}
