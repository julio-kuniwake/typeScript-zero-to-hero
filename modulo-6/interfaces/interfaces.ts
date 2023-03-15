export { };
// ************ Interface Simples ************
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function exibirNome(pessoa: Pessoa) {
    return `Nome: ${pessoa.nome}, Sobrenome: ${pessoa.sobrenome}, Idade: ${pessoa.idade}`;
}

let pJulio = {
    nome: 'julio',
    sobrenome: 'Kuniwake',
    idade: 34,
}

console.log(exibirNome(pJulio));
console.log('-----------------------------------------------------');

// ************ Interface com propriedades opcionais ************
interface Livro {
    titulo: string;
    autor: string;
    paginas?: number;
}

let livro: Livro = {
    titulo: 'Teste a testar',
    autor: 'O autor stark',
    paginas: 20,
}

console.log('Dados do Livro: ', livro);
console.log('-----------------------------------------------------');

// ************ Interface com propriedades somente de leitura e opcionais ************

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
};

let carro: Carro = {
    modelo: 'Fusca',
    ano: 1980,
    valor: 5000,
}

console.log('Carro: ', carro);
console.log('-----------------------------------------------------');

// ************ Interface com implements class ************

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`)
    }
}

let gato = new Gato('Sherk', 10, true);
console.log(gato);
gato.comer('Ração');
console.log('-----------------------------------------------------');

// ************ Interface vs Alias Type ************
// São praticamente semelhante e podem ser usados em conjunto
interface Pessoa2 {
    nome: string;
    sobrenoms: string;
    idade: number;
}

type Pessoa3 = {
    nome: string;
    sobrenoms: string;
    idade: number;
}

