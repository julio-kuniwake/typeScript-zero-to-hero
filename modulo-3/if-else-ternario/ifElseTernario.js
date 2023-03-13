"use strict";
exports.__esModule = true;
// ************ If ************
var permissaoDirigir = 18;
if (permissaoDirigir >= 18) {
    console.log("Voce tem ".concat(permissaoDirigir, " e pode dirigir!"));
}
// ************ If Else ************
var permissaoDirigir1 = 17;
if (permissaoDirigir1 >= 18) {
    console.log("Voce tem ".concat(permissaoDirigir1, " anos, e pode dirigir!"));
}
else {
    console.log("Voce ainda tem ".concat(permissaoDirigir1, " anos, e ainda n\u00E3o pode dirigir!"));
}
// ************ If Else If ************
var desconto;
var item = 8;
if (item > 0 && item <= 5) {
    desconto = 5;
    console.log("O desconto sera de ".concat(desconto, "%"));
}
else if (item > 5 && item <= 10) {
    desconto = 10;
    console.log("O desconto ser\u00E1 de ".concat(desconto, "%"));
}
else if (item > 10) {
    desconto = 14;
    console.log("O desconto ser\u00E1 de ".concat(desconto, "%"));
}
else {
    desconto = 0;
    console.log("O desconto ser\u00E1 de ".concat(desconto, "%"));
}
// ************ Operador Ternario : ? ************
var idadeVotacao = 19;
var podeVotar = (idadeVotacao >= 18) ? "Sua idade \u00E9 ".concat(idadeVotacao, ", vc pode votar!") : "Sua idade \u00E9 ".concat(idadeVotacao, ", n\u00E3o pode votar!");
console.log(podeVotar);
