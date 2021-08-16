<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = ['title','details'];

    public function subTodos() 
    {
        return $this->hasMany(SubTodo::class, 'todo_id');
    }
}
