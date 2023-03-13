"use strict";
exports.__esModule = true;
// ************ Functions (Named function) ************
var resultado;
function somarNumeros(n1, n2) {
    return n1 + n2;
}
resultado = somarNumeros(5, 5);
console.log('O resultado da soma é: ', resultado);
// ************ Função Anônima (Function Expression) ************
var saudar = function (msg) {
    return msg;
};
console.log(saudar('Olá develop!'));
// ************ Arrow Function Expression ************
var multiplicar = function (n1, n2) {
    return n1 * n2;
};
var resultMult = multiplicar(5, 5);
console.log('O resultado da multiplicação é: ', resultMult);
// ************ Function Constructor ************
var subtrair = new Function('numero', 'return "O numero passado como parametro é: " + numero');
console.log(subtrair(999));
