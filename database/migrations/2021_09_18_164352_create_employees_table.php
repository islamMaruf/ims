<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    // name: "",
    //     email: "",
    //     address: "",
    //     salary: "",
    //     joining_date: "",
    //     nid: "",
    //     phone: "",
    //     photo: "",
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('email')->unique();
            $table->text('address', 500)->nullable();
            $table->date('join_date')->nullable();
            $table->string('nid', 55)->nullable();
            $table->string('phone', 25)->nullable();
            $table->string('photo', 255)->nullable();
            $table->double('salary', 13, 2)->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
