<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Citizen extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nida',
        'surnames',
        'fore_name',
        'date_of_birth',
        'nationality',
        'province',
        'district',
        'sector',
        'cell',
        'village',
        'sex',
        'civil_status',
    ];
}
