"use strict";
exports.__esModule = true;
// ************ Propriedade Estatica ************
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++;
    }
    Funcionario.contratacoes = 0;
    return Funcionario;
}());
var func1 = new Funcionario('Julio', 'Kuniwake', 'Dev');
var func2 = new Funcionario('Carol', 'Cardoso', 'Medica');
console.log('Qtd contratações: ', Funcionario.contratacoes);
console.log('------------------------------------------------');
// ************ Popriedade Estatica em Metodos ************
var Funcionario1 = /** @class */ (function () {
    function Funcionario1(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario1.contratacoes++;
    }
    // Metodo statico
    Funcionario1.retornaContratacoes = function () {
        return Funcionario1.contratacoes;
    };
    Funcionario1.contratacoes = 0;
    return Funcionario1;
}());
var func01 = new Funcionario1('Julio', 'Kuniwake', 'Dev');
var func02 = new Funcionario1('Carol', 'Cardoso', 'Medica');
var func03 = new Funcionario1('Ana', 'Mendonça', 'Medica');
console.log('Qtd contratações: ', Funcionario1.retornaContratacoes());
console.log('------------------------------------------------');
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORROS_VENDIDOS++;
        console.log('Qtd cachorros vendidos: ', Cachorro.QTD_CACHORROS_VENDIDOS);
    }
    Cachorro.prototype.exibirInformacoes = function () {
        console.log("O cachorro ".concat(this.nome, " tem ").concat(this.idade, " anos."));
    };
    Cachorro.QTD_CACHORROS_VENDIDOS = 0;
    return Cachorro;
}());
var cachorro = new Cachorro('Luna', 5, ['Shitsu']);
var cachorro1 = new Cachorro('Stark', 4, ['Tomba Lata']);
var cachorro2 = new Cachorro('Nina', 5, ['Pug']);
