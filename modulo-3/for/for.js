"use strict";
exports.__esModule = true;
// ************ for Tradicional ************
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// ************ for ...of - (Retorna uma coleção de matriz, lista ou tuplas) ************
var arrayNumeros = [10, 20, 30, 40, 50];
for (var _i = 0, arrayNumeros_1 = arrayNumeros; _i < arrayNumeros_1.length; _i++) {
    var i = arrayNumeros_1[_i];
    console.log(i);
}
// ************ for ...in - (Retorna uma coleção de matriz, lista ou tuplas) ************
var arrayNumeros01 = [5, 4, 3, 2, 1, 0];
for (var i in arrayNumeros01) {
    console.log(i);
}
