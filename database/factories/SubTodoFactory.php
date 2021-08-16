<?php

namespace Database\Factories;

use App\Models\SubTodo;
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
    public function definition()
    {
        return [
            'body' => $this->faker->paragraph(),
            'todo_id' => function() {
                return Todo::facttory()->create()->id;
            }
        ];
    }
}
