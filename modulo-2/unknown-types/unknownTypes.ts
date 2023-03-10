// ************ Tipo Unknown ************
let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Texto string';

console.log('Tipo unknown -> ', valorVariavel);

// ************ Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos ************
let valor: unknown;
valor = 'Teste';

/*
let valorBoolean: boolean = valor;
let valorString: string = valor;
let valorAny: any = valor; // Aqui deu certo
let valorAnyArray: any[] = valor;
let valorNumber: number = valor;

console.log(valorAny);
*/

// ************ Diferença entre 'any' e 'unknown' ************
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

// console.log('Any -> ', algumaCoisaAny.toFixed(2));

// Dessa maneira ele te força a fazer alguma verificação, para que não quebre o codigo
// console.log('Unknown -> ', algumaCoisaUnknown.toFixed(2)); 

if (typeof algumaCoisaUnknown == 'number') { // Solução para o problema, obrigando a ter uma verificação
    console.log('Unknown -> ', algumaCoisaUnknown.toFixed(2));
};



