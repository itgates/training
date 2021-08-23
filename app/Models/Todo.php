<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = ['title','details'];

    public function subTasks(): HasMany
    {
        return $this->hasMany(SubTodo::class, 'todo_id');
    }
}
