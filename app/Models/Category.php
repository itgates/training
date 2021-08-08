<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get the boycotted products of a category
     *
     * @return HasMany
     */
    public function boycotted_products()
    {
        return $this->hasMany(BoycottedProduct::class);
    }


    /**
     * Get the alternative products of a category
     *
     * @return HasMany
     */
    public function alternative_products()
    {
        return $this->hasMany(AlternativeProduct::class);
    }
}
