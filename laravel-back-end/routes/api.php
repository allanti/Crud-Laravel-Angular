<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmployeeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Aqui é onde você pode registrar rotas da API para sua aplicação. Essas
| rotas são carregadas pelo RouteServiceProvider e todas elas serão
| atribuídas ao grupo de middleware "api". Faça algo incrível!
|
*/

// Rota para obter todos os funcionários (método GET)
Route::get('/employees', [App\Http\Controllers\EmployeeController::class, 'index']);

// Rota para criar um novo funcionário (método POST)
Route::post('/save', [App\Http\Controllers\EmployeeController::class, 'store']);

// Rota para atualizar um funcionário existente (método PUT)
Route::put('/update/{id}', [App\Http\Controllers\EmployeeController::class, 'update']);

// Rota para excluir um funcionário (método DELETE)
Route::delete('/delete/{id}', [App\Http\Controllers\EmployeeController::class, 'destroy']);

// Rota para obter informações do usuário autenticado (protegida por autenticação Sanctum)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

