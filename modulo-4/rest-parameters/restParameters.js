"use strict";
exports.__esModule = true;
// ************ Rest Parameters ************
function somarNum() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var total = 0;
    numeros.forEach(function (num) { return (total += num); });
    return total;
}
console.log('Exemplo 1 -> ', somarNum(30, 50));
console.log('Exemplo 2 -> ', somarNum(30, 50, 10, 10, 50, 50, 1));
console.log('--------------------------------------------------------');
// ************ Rest Parameters Exemplo 2 ************
function listarFrutas(frase) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    return frase + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Na feira tem: ', 'maça', 'abacaxi', 'limao', 'laranja'));
console.log('--------------------------------------------------------');
// ************ Rest Parameters Exemplo 3 ************
var Produtos = /** @class */ (function () {
    function Produtos() {
    }
    Produtos.prototype.exibirProdutos = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var p = produtos_1[_a];
            console.log(p);
        }
    };
    return Produtos;
}());
;
console.log('Todos os produtos de informatica disponiveis no estoque: ');
var departamentoInformatica = new Produtos();
departamentoInformatica.exibirProdutos('Notebook', 'Mouse', 'Monitor', 'Teclado', 'Fonte');
