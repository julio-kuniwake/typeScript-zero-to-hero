"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ************ Get ************
var Quadrado = /** @class */ (function () {
    function Quadrado() {
        this._largura = 6;
        this._altura = 12;
    }
    Object.defineProperty(Quadrado.prototype, "calcularQuadrado", {
        get: function () {
            return this._largura * this._altura;
        },
        enumerable: false,
        configurable: true
    });
    return Quadrado;
}());
console.log(new Quadrado().calcularQuadrado);
console.log('--------------------------------------------------');
// ************ Set ************
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.retornaNomePessoa = function (setNomePessoa) {
        this.nome = setNomePessoa;
    };
    return Pessoa;
}());
var pessoa = new Pessoa();
pessoa.retornaNomePessoa('Julio kuniwake');
console.log('Meu nome é: ', pessoa.nome);
console.log('--------------------------------------------------');
// ************ Get, explicação mais densa ************
var Estudante = /** @class */ (function () {
    function Estudante() {
        this._nome = 'Ana Caroline';
    }
    Object.defineProperty(Estudante.prototype, "getNomeEstudante", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Estudante;
}());
var estudante = new Estudante();
var resultado = estudante.getNomeEstudante;
console.log(resultado);
console.log('--------------------------------------------------');
// ************ Set, explicação mais densa ************
var Estudante_01 = /** @class */ (function () {
    function Estudante_01(nome, semestre, curso) {
        this.nome = nome;
        this.semestre = semestre;
        this.curso = curso;
    }
    Object.defineProperty(Estudante_01.prototype, "getCursos", {
        get: function () {
            return this.curso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estudante_01.prototype, "SetCursos", {
        set: function (setCurso) {
            this.curso = setCurso;
        },
        enumerable: false,
        configurable: true
    });
    return Estudante_01;
}());
var est_01 = new Estudante_01('Julio', 5, 'ADS');
console.log(est_01);
console.log('--------------------------------------------------');
// Setter call
est_01.curso = 'Ciencias da Computação';
// Getter call
console.log('Curso atualizado... ', est_01.getCursos);
// Usar na linha de comando o tsc -t es5 script.ts 
