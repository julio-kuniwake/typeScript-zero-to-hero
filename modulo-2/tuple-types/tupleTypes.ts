// ************ Uso simples de Tuplas ************
let pessoa: [string, string, number];
pessoa = ['Julio Kuniwake', 'Desenvolvedor', 34];

console.log('Dados Tupla -> ', pessoa);

// ************ Acessanbo o valor da Tupla ************
let carro: [string, string, number];
carro = ['Civic', 'Honda', 2.0]

console.log('A potencia do motor é: ', carro[2]);

// ************ Usando Tuplas com 'Labels' ************
let carro1: [nome: string, marca: string, potencia: number];
carro1 = ['Civic', 'Honda', 2.0]

console.log('Tupla de carros -> ', carro1);

// ************ Usando Tuplas com 'Spread Operator' ************
let tipoCarnes: [string, ...string[]];
tipoCarnes = ['Picanha', 'Costela', 'Alcatra', 'Contra File', 'Maminha'];

console.log('Tipos de Carnes -> ', ...tipoCarnes);

// ************ Lista Heterogênea de Tupla, com Spread Operator ************
let listMelhoresCarnes: [number, boolean, ...string[]];
listMelhoresCarnes = [4, true, ...tipoCarnes];

console.log('Melhores carnes -> ', listMelhoresCarnes);

// ************ Usando Tuplas em Funções ************
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Julio', 'Ana'], [34, 31]);
console.log('Resultado da função de tuplas -> ', resultado);

// ************ Labeled, Tuplas com Sread Operator numa função ************
type Nome = | [primeiroNome: string, sobrenome: string]
            | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log('Sem o nome do meio -> ', criarPessoa('Julio', 'Kuniwake'));
console.log('Com o nome do meio -> ', criarPessoa('Julio', 'Toshio', 'Kuniwake'));