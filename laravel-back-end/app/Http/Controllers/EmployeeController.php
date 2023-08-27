<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use GuzzleHttp\Psr7\Response;

class EmployeeController extends Controller
{
    // Retorna todos os funcionários da base de dados como resposta JSON
    public function index(){
        $employees = Employee::all();
        return response()->json($employees);
    }

    // Cria um novo funcionário na base de dados com base nos dados recebidos na requisição
    public function store(Request $request){
        // Cria uma nova instância do modelo Employee com os dados fornecidos na requisição
        $employee = new Employee([
            'name' => $request->input('name'),
            'adrees' => $request->input('address'),
            'mobile' => $request->input('mobile'),
        ]);

        // Salva o novo funcionário na base de dados
        $employee->save();

        // Retorna uma resposta JSON indicando que o funcionário foi criado com sucesso
        return response()->json('Employee created');
    }

    // Atualiza os dados de um funcionário com base nos dados recebidos na requisição
    public function update(Request $request, $id){
        // Encontra o funcionário pelo ID
        $employee = Employee::find($id);

        // Atualiza os campos do funcionário com os novos dados da requisição
        $employee->update($request->all());

        // Retorna uma resposta JSON indicando que o funcionário foi atualizado com sucesso
        return response()->json('Employee updated');
    }

    // Exclui um funcionário da base de dados com base no ID fornecido
    public function destroy($id){
        // Encontra o funcionário pelo ID
        $employee = Employee::find($id);

        // Exclui o funcionário da base de dados
        $employee->delete();

        // Retorna uma resposta JSON indicando que o funcionário foi excluído com sucesso
        return response()->json('Deleted');
    }
}
