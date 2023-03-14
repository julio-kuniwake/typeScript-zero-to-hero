"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// ************ public ************
var Estudante = /** @class */ (function () {
    function Estudante() {
    }
    return Estudante;
}());
var estudante = new Estudante();
estudante.id = 555;
estudante.nome = 'Julio';
console.log("Id: ".concat(estudante.id, ", Nome: ").concat(estudante.nome));
console.log('----------------------------------------------');
// ************ private ************
var Professor = /** @class */ (function () {
    function Professor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
    Professor.prototype.getDadosProfessor = function () {
        return "Id: ".concat(this.id, ", Nome: ").concat(this.nome, ", Idade: ").concat(this.idade, ".");
    };
    return Professor;
}());
var prof = new Professor(444, 'Carol', 34);
console.log(prof.getDadosProfessor());
console.log('----------------------------------------------');
// console.log(prof.idade); // Aqui não da certo, pois idade é privado
// ************ protected ************
var Veiculo = /** @class */ (function () {
    function Veiculo(id, tipo) {
        this.id = id;
        this.tipo = tipo;
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(id, tipo, potencia) {
        var _this = _super.call(this, id, tipo) || this;
        _this.potencia = potencia;
        return _this;
    }
    Carro.prototype.getValoresVeiculo = function () {
        return "Id carro: ".concat(this.id, ", Tipo carro: ").concat(this.tipo, ", Potencia: ").concat(this.potencia);
    };
    return Carro;
}(Veiculo));
var carro = new Carro(9888, 'Esportivo', 500);
console.log(carro.getValoresVeiculo());
