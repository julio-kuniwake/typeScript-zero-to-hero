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
// ************ Herança ************
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("Animal se moveu: ".concat(distancia, " metros."));
        console.log('-------------------------------------------------');
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.latir = function () {
        console.log('AUUUUUUUUUU');
        console.log('-------------------------------------------------');
    };
    return Cachorro;
}(Animal));
var c = new Cachorro();
c.latir();
c.mover(5);
// ************ Herança, exemplo 2 ************
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sobrenome) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._nome = _nome;
        this._sobrenome = _sobrenome;
    }
    Pessoa.prototype.getNomeCompleto = function () {
        return "".concat(this._nome, " ").concat(this._sobrenome);
    };
    Pessoa.prototype.getApresentando = function () {
        return "Meu nome \u00E9: ".concat(this._nome, " ").concat(this._sobrenome);
    };
    return Pessoa;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, funcao) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.funcao = funcao;
        return _this;
    }
    Funcionario.prototype.getNomeComFuncao = function () {
        return _super.prototype.getApresentando.call(this) + ", e minha fun\u00E7\u00E3o \u00E9: ".concat(this.funcao);
    };
    return Funcionario;
}(Pessoa));
var func = new Funcionario('Julio', 'Kuniwake', 'Desenvolvedor');
console.log(func.getNomeCompleto());
console.log(func.getApresentando());
console.log('-------------------------------------------------');
console.log(func.getNomeComFuncao());
