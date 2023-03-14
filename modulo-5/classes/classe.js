"use strict";
exports.__esModule = true;
// ************ Class com construtor ************
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa.prototype.nomeCompleto = function () {
        return "".concat(this.nome, " ").concat(this.sobrenome);
    };
    return Pessoa;
}());
var p = new Pessoa('Julio', 'Kuniwake');
console.log(p.nomeCompleto());
console.log('-----------------------------------------------------------------');
// ************ Class sem construtor ************
var Estudante = /** @class */ (function () {
    function Estudante() {
    }
    Estudante.prototype.mostraEstudante = function () {
        var estudante = new Estudante();
        estudante.id = 999;
        estudante.nome = 'Ana';
        console.log("Id estudante \u00E9: ".concat(estudante.id, " , e seu nome \u00E9: ").concat(estudante.nome));
    };
    return Estudante;
}());
var e = new Estudante();
e.mostraEstudante();
