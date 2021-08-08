<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlternativeBoycottedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alternative_boycotted', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('boycotted_product_id');
            $table->unsignedBigInteger('alternative_product_id');
            $table->timestamps();

            $table->foreign('boycotted_product_id')->references('id')->on('boycotted_products');
            $table->foreign('alternative_product_id')->references('id')->on('alternative_products');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alternative_boycotted');
    }
}
