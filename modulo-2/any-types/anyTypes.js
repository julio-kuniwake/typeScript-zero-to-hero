// ************ Tipo Any ************
var a = 34;
var b = 'Julio';
var result = a + b;
console.log('Resultado errado -> ', result);
// ************ Quando o tipo 'any' é inferido implicitamente ************
var frase;
frase = 'Eu sou uma frase';
console.log(frase);
// ************ Quando devemos usar o tipo any? ************
var formulario = {
    nome: 'Julio',
    sobrenome: 'Kuniwake',
    idade: 34
};
console.log('Retorno formulario -> ', formulario);
