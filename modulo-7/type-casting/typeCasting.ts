export { };
// ************ Type Casting ************
let nome: unknown = 'Julio kuniwake';
console.log((nome as string).toLowerCase()); // Transformando unknown para string
console.log('------------------------------------------');

// ************ Type Casting '<>' ************
let carro = 'Corolla';
let sizeString: number = (<string>carro).length;

console.log('O tamanho da string é: ', sizeString);