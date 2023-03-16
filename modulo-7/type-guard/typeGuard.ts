export { };

// ************ Type Guard: typeof ************
type alfaNumerico = string | number;

function exibirTipo(a: alfaNumerico, b: alfaNumerico) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    } else if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b);
    } else {
        throw new Error('Argumentos invalidos! Ambos os argumentos devem ser números ou string');
    }
}

console.log(exibirTipo('Julio', '2'));
console.log(exibirTipo(5, 5));
// console.log(exibirTipo('Ana', 5)); // aqui da ruim
console.log('------------------------------------------');

// ************ Type Guard: instanceof ************
class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string) {
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto {
    nome: string;
    ano: number;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;
    }
}

function detalheVeiculo(veiculo: Carro | Moto) {
    if (veiculo instanceof Carro) {
        return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`;
    } else if (veiculo instanceof Moto) {
        return `O nome da moto é: ${veiculo.nome} de ano: ${veiculo.ano}`;
    }
}

let carro = new Carro('Civic', 'Honda');
console.log(carro);
let moto = new Moto('R100', 2019);
console.log(moto);
console.log('------------------------------------------');

// ************ Type Guard: in ************
interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal {
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

function nadar(grupo: string) {
    console.log(`O ${grupo} está nadando`);
}

function voar(grupo: string) {
    console.log(`O ${grupo} está voando`);
}

function movimentar(animal: Animal) {
    if ('corPeixe' in animal) {
        nadar((animal as Peixe).grupo);
    } else if ('corPena' in animal) {
        voar((animal as Passaro).grupo);
    }
}

movimentar(new Peixe('Peixe', 'Azul'));
movimentar(new Passaro('Passaro', 'Verde'));