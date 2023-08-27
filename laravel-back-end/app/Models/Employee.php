<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    // Indica que essa classe utiliza a funcionalidade de criação de fábrica de registros falsos (fake data)
    use HasFactory;

    // Define o nome da tabela no banco de dados associada a esta classe
    protected $table = 'employees';

    // Define o nome da chave primária na tabela
    protected $primaryKey = 'id';

    // Define quais colunas da tabela podem ser preenchidas em massa (mass assignment)
    protected $fillable = ['name', 'adrees', 'mobile'];
}
