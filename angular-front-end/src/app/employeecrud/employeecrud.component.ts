import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.scss']
})
export class EmployeecrudComponent implements OnInit {

  // Array para armazenar os registros de funcionários
  EmployeeArray: any[] = [];
  // Flag para indicar se os resultados estão carregados
  isResultLoaded = false;
  // Flag para indicar se o formulário de atualização está ativo
  isUpdateFormActive = false;

  // Variáveis para os campos do formulário
  name: string = "";
  address: string = "";
  mobile: Number = 0;

  // ID do funcionário atualmente selecionado para atualização
  currentEmployeeID = "";

  constructor(private http: HttpClient) {
    // Chama o método para carregar os funcionários quando o componente é criado
    this.getAllEmployee();
  }

  ngOnInit(): void {
  }

  // Método para obter todos os funcionários
  getAllEmployee() {
    this.http.get("http://localhost/ProjetoCRUD/laravel-back-end/public/api/employees")
      .subscribe((resultData: any) => {
        // Marca os resultados como carregados
        this.isResultLoaded = true;
        // Exibe os dados no console
        console.log(resultData);
        // Atribui os registros de funcionários ao array
        this.EmployeeArray = resultData;
      });
  }

  // Método para registrar um novo funcionário
  register() {
    // Prepara os dados do corpo da requisição
    let bodyData = {
      "name": this.name,
      "address": this.address,
      "mobile": this.mobile
    };

    // Faz uma requisição POST para criar um novo funcionário
    this.http.post("http://localhost/ProjetoCRUD/laravel-back-end/public/api/save", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Employee Registered Successfully");
      // Atualiza a lista de funcionários
      this.getAllEmployee();
      // Limpa os campos do formulário
      this.name = '';
      this.address = '';
      this.mobile = 0;
    });
  }

  // Define os campos do formulário para a atualização
  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.adrees;
    this.mobile = data.mobile;
    this.currentEmployeeID = data.id;
  }

  // Método para atualizar os registros de funcionários
  UpdateRecords() {
    // Prepara os dados do corpo da requisição
    let bodyData = {
      "name": this.name,
      "adrees": this.address,
      "mobile": this.mobile,
    };

    // Faz uma requisição PUT para atualizar um funcionário
    this.http.put("http://localhost/ProjetoCRUD/laravel-back-end/public/api/update" + "/" + this.currentEmployeeID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Employee Registered Updated");
      // Atualiza a lista de funcionários
      this.getAllEmployee();
      // Limpa os campos do formulário
      this.name = '';
      this.address = '';
      this.mobile = 0;
    });
  }

  // Método para salvar as alterações (registro ou atualização)
  save() {
    if (this.currentEmployeeID == '') {
      // Se não há ID, significa que é um novo registro
      this.register();
    } else {
      // Caso contrário, atualiza um registro existente
      this.UpdateRecords();
    }
  }

  // Método para excluir um funcionário
  setDelete(data: any) {
    // Faz uma requisição DELETE para excluir um funcionário
    this.http.delete("http://localhost/ProjetoCRUD/laravel-back-end/public/api/delete" + "/" + data.id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Employee Deleted");
      // Atualiza a lista de funcionários
      this.getAllEmployee();
    });
  }
}