"use strict";
exports.__esModule = true;
function exibirNome(pessoa) {
    return "Nome: ".concat(pessoa.nome, ", Sobrenome: ").concat(pessoa.sobrenome, ", Idade: ").concat(pessoa.idade);
}
var pJulio = {
    nome: 'julio',
    sobrenome: 'Kuniwake',
    idade: 34
};
console.log(exibirNome(pJulio));
console.log('-----------------------------------------------------');
var livro = {
    titulo: 'Teste a testar',
    autor: 'O autor stark',
    paginas: 20
};
console.log('Dados do Livro: ', livro);
console.log('-----------------------------------------------------');
;
var carro = {
    modelo: 'Fusca',
    ano: 1980,
    valor: 5000
};
console.log('Carro: ', carro);
console.log('-----------------------------------------------------');
var Gato = /** @class */ (function () {
    function Gato(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    Gato.prototype.comer = function (tipoComida) {
        console.log("O gato ".concat(this.nome, " est\u00E1 comendo ").concat(tipoComida));
    };
    return Gato;
}());
var gato = new Gato('Sherk', 10, true);
console.log(gato);
gato.comer('Ração');
