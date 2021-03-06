<?php

namespace Database\Factories;

use App\Models\SubTodo;
use App\Models\Todo;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubTodoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SubTodo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'body' => $this->faker->sentence(2),
            'todo_id' => function() {
                return Todo::factory()->create()->id;
            }
        ];
    }
}
