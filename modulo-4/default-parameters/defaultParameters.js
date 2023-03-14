"use strict";
exports.__esModule = true;
// ************ Default Parameters ************
function descontoCompra(preco, desconto) {
    if (desconto === void 0) { desconto = 0.08; }
    return preco * (1 - desconto);
}
;
console.log('Preço com desconto: ', descontoCompra(100));
// ************ Exemplo 2 ************
var exibirMsg = function (msg, saudar) {
    if (saudar === void 0) { saudar = 'Olá'; }
    return saudar + ' ' + msg + '!';
};
console.log(exibirMsg('Java'));
// ************ Exemplo 3 ************
var exibirNome = function (nome, sobrenome) {
    if (sobrenome === void 0) { sobrenome = 'Kuniwake'; }
    return nome + ' ' + sobrenome;
};
var resultado1 = exibirNome('Julio');
console.log(resultado1);
var resultado2 = exibirNome('Julio', undefined);
console.log(resultado2);
