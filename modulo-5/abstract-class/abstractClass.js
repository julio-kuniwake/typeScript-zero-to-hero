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
Object.defineProperty(exports, "__esModule", { value: true });
// ************ Abstract class ************
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Object.defineProperty(Funcionario.prototype, "getNomeComnpleto", {
        get: function () {
            return "".concat(this.nome, " ").concat(this.sobrenome);
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.emitirContraCheque = function () {
        return "".concat(this.getNomeComnpleto, " - Sal\u00E1rio: ").concat(this.retornarSalario());
    };
    return Funcionario;
}());
// const func = new Funcionario('Julio', 'Kuniwake'); // Classes abstract não podem ser instanciadas
var FuncionarioCLT = /** @class */ (function (_super) {
    __extends(FuncionarioCLT, _super);
    function FuncionarioCLT(nome, sobrenome, salario) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.salario = salario;
        return _this;
    }
    FuncionarioCLT.prototype.retornarSalario = function () {
        return this.salario;
    };
    return FuncionarioCLT;
}(Funcionario));
var FuncionarioPJ = /** @class */ (function (_super) {
    __extends(FuncionarioPJ, _super);
    function FuncionarioPJ(nome, sobrenome, valorHora, qtdHorasTrabalhadas) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.valorHora = valorHora;
        _this.qtdHorasTrabalhadas = qtdHorasTrabalhadas;
        return _this;
    }
    FuncionarioPJ.prototype.retornarSalario = function () {
        return this.valorHora * this.qtdHorasTrabalhadas;
    };
    return FuncionarioPJ;
}(Funcionario));
var funcJulio = new FuncionarioCLT('Julio', 'Kuniwake', 4200);
var funcCarol = new FuncionarioPJ('Carol', 'Cardoso', 100, 120);
console.log('CLT -> ', funcJulio.emitirContraCheque());
console.log('--------------------------------------------------------');
console.log('JP -> ', funcCarol.emitirContraCheque());
