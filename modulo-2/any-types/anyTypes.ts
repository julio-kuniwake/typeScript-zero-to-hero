// ************ Tipo Any ************
const a: any = 34;
const b: string = 'Julio'

const result = a + b;
console.log('Resultado errado -> ', result);

// ************ Quando o tipo 'any' é inferido implicitamente ************
let frase;
frase = 'Eu sou uma frase';

console.log(frase);

// ************ Quando devemos usar o tipo any? ************
const formulario: { [campoFormulario: string]: any } = {
    nome: 'Julio',
    sobrenome: 'Kuniwake',
    idade: 34
};

console.log('Retorno formulario -> ', formulario);