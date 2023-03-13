export { };
// ************ Functions (Named function) ************
let resultado: number;
function somarNumeros(n1: number, n2: number): number {
    return n1 + n2;
}

resultado = somarNumeros(5, 5);
console.log('O resultado da soma é: ', resultado);

// ************ Função Anônima (Function Expression) ************
const saudar = function (msg: string) {
    return msg;
};

console.log(saudar('Olá develop!'));

// ************ Arrow Function Expression ************
const multiplicar = (n1: number, n2: number) => { // Não tem a necessidade de colocar a palavra reservada function
    return n1 * n2;
}

let resultMult: number = multiplicar(5, 5);
console.log('O resultado da multiplicação é: ', resultMult);

// ************ Function Constructor ************
const subtrair = new Function('numero', 'return "O numero passado como parametro é: " + numero');
console.log(subtrair(999));