"use strict";
exports.__esModule = true;
function exibirTipo(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b);
    }
    else {
        throw new Error('Argumentos invalidos! Ambos os argumentos devem ser números ou string');
    }
}
console.log(exibirTipo('Julio', '2'));
console.log(exibirTipo(5, 5));
// console.log(exibirTipo('Ana', 5)); // aqui da ruim
console.log('------------------------------------------');
// ************ Type Guard: instanceof ************
var Carro = /** @class */ (function () {
    function Carro(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
    return Carro;
}());
var Moto = /** @class */ (function () {
    function Moto(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    return Moto;
}());
function detalheVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        return "O nome do carro \u00E9: ".concat(veiculo.nome, " e a marca \u00E9: ").concat(veiculo.marca);
    }
    else if (veiculo instanceof Moto) {
        return "O nome da moto \u00E9: ".concat(veiculo.nome, " de ano: ").concat(veiculo.ano);
    }
}
var carro = new Carro('Civic', 'Honda');
console.log(carro);
var moto = new Moto('R100', 2019);
console.log(moto);
console.log('------------------------------------------');
var Peixe = /** @class */ (function () {
    function Peixe(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
    return Peixe;
}());
var Passaro = /** @class */ (function () {
    function Passaro(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
    return Passaro;
}());
function nadar(grupo) {
    console.log("O ".concat(grupo, " est\u00E1 nadando"));
}
function voar(grupo) {
    console.log("O ".concat(grupo, " est\u00E1 voando"));
}
function movimentar(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPena' in animal) {
        voar(animal.grupo);
    }
}
movimentar(new Peixe('Peixe', 'Azul'));
movimentar(new Passaro('Passaro', 'Verde'));
