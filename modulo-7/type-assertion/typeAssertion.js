"use strict";
exports.__esModule = true;
// ************ Type Assertion ************
function exibirPrecoFinal(preco, desconto, formato) {
    var precoComDesconto = preco - desconto;
    return formato ? "R$ ".concat(precoComDesconto) : precoComDesconto;
}
var descontoFinal = exibirPrecoFinal(100, 0.05, true); // Jeito com as
// let descontoFinal = <number>exibirPrecoFinal(100, 0.05, false); // Jeito com '<>'
console.log(descontoFinal);
console.log('--------------------------------------------');
var humano = {
    idade: 26,
    idioma: 'Portugues'
};
var humano_02 = humano;
console.log(humano_02.nome.toLowerCase());
