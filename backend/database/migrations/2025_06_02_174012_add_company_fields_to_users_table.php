<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('company_name')->nullable();
            $table->string('tin')->nullable()->unique(); // Tax ID
            $table->string('phone')->nullable();
            $table->string('user_type')->default('individual'); // 'individual' or 'company'
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn(['company_name', 'tin', 'phone', 'user_type']);
        });
    }
};
