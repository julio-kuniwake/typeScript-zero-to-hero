"use strict";
exports.__esModule = true;
// ************ Exemplo 1 ************
var Funcionario = /** @class */ (function () {
    function Funcionario(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    ;
    return Funcionario;
}());
var func = new Funcionario(new Date(1988, 7, 16)); // Maneira correta
// func.dataNascimento = new Date(1988, 7, 16) // Assim da ruim
console.log(func);
console.log('-----------------------------------------------------');
// ************ Exemplo 2 ************
// Usando direto no parametro do construtor
var Funcionario_2 = /** @class */ (function () {
    function Funcionario_2(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
    ;
    return Funcionario_2;
}());
// ************ Exemplo 3 ************
var Funcionario_3 = /** @class */ (function () {
    function Funcionario_3(nome, codigoFunc) {
        this.nome = nome;
        this.codigoFunc = codigoFunc;
    }
    ;
    return Funcionario_3;
}());
var funcionario = new Funcionario_3('julio', 2222); // Aqui está OK
funcionario.nome = 'Ana'; // Aqui está OK
// funcionario.codigoFunc = 1111; // Aqui da ruim
console.log(funcionario);
console.log('-----------------------------------------------------');
var funcInterface = {
    id: 800,
    nome: 'Paulo'
};
// funcInterface.id = 700; // jeito errado
var funcInterface2 = {
    id: 800,
    nome: 'Paulo'
};
funcInterface2.id = 700; // jeito que funciona
funcInterface2.nome = 'Araci';
