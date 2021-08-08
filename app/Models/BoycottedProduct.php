<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class BoycottedProduct extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get the category of a boycotted product
     *
     * @return BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the country of a boycotted product
     *
     * @return BelongsTo
     */
    public function country()
    {
        return $this->belongsTo(BoycottedCountry::class);
    }


    /**
     * Get the alternatives of a boycotted product
     *
     * @return BelongsToMany
     */
    public function alternatives()
    {
        return $this->belongsToMany(
            AlternativeProduct::class,
            'alternative_boycotted',
            'boycotted_product_id',
            'alternative_product_id'
        );
    }
}
