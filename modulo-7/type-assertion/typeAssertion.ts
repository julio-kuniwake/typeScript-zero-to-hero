export { };
// ************ Type Assertion ************
function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    let precoComDesconto = preco - desconto;

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

let descontoFinal = exibirPrecoFinal(100, 0.05, true) as string; // Jeito com as
// let descontoFinal = <number>exibirPrecoFinal(100, 0.05, false); // Jeito com '<>'
console.log(descontoFinal);
console.log('----------------- Exemplo perigoso, pode induzir ao erro  -----------------');

// ************ Type Assertion onde não acusa o erro antes de executar ************
// Ter cuidado ao usar o type assertion

// Exemplo onde permite executar o codigo, induzindo ao erro
type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

let humano = {
    idade: 26,
    idioma: 'Portugues',
}

let humano_02 = humano as Humano; // esta faltando o atributo nome
console.log(humano_02.nome.toLowerCase());

// ************ Type Assertion onde acusa o erro antes de executar ************
type Humano1 = {
    nome: string;
    idade: number;
    idioma: string;
}

let humano1 = {
    idade: 26,
    idioma: 'Portugues',
}

// let humano2: Humano1 = humano1;
// console.log(humano2.nome.toLowerCase());