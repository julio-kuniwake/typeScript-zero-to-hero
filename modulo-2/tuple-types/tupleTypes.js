var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ************ Uso simples de Tuplas ************
var pessoa;
pessoa = ['Julio Kuniwake', 'Desenvolvedor', 34];
console.log('Dados Tupla -> ', pessoa);
// ************ Acessanbo o valor da Tupla ************
var carro;
carro = ['Civic', 'Honda', 2.0];
console.log('A potencia do motor é: ', carro[2]);
// ************ Usando Tuplas com 'Labels' ************
var carro1;
carro1 = ['Civic', 'Honda', 2.0];
console.log('Tupla de carros -> ', carro1);
// ************ Usando Tuplas com 'Spread Operator' ************
var tipoCarnes;
tipoCarnes = ['Picanha', 'Costela', 'Alcatra', 'Contra File', 'Maminha'];
console.log.apply(console, __spreadArray(['Tipos de Carnes -> '], tipoCarnes, false));
// ************ Lista Heterogênea de Tupla, com Spread Operator ************
var listMelhoresCarnes;
listMelhoresCarnes = __spreadArray([4, true], tipoCarnes, true);
console.log('Melhores carnes -> ', listMelhoresCarnes);
// ************ Usando Tuplas em Funções ************
function listarPessoas(nomes, idades) {
    return __spreadArray(__spreadArray([], nomes, true), idades, true);
}
var resultado = listarPessoas(['Julio', 'Ana'], [34, 31]);
console.log('Resultado da função de tuplas -> ', resultado);
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
console.log('Sem o nome do meio -> ', criarPessoa('Julio', 'Kuniwake'));
console.log('Com o nome do meio -> ', criarPessoa('Julio', 'Toshio', 'Kuniwake'));
