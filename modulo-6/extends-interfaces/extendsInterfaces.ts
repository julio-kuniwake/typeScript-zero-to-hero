export { };
// ************ Interface com extends ************
interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal {
    raca: string;
}

let cachorro: Cachorro = {
    nome: 'Stark',
    idade: 3,
    porte: 'medio',
    raca: 'Tombao',
}

console.log(cachorro);
console.log('--------------------------------------------');

// ************ Interface com multiplas interfaces ************
interface Boi {
    tipoCorte: string;
}

interface Vaca {
    tipoCorte: string;
}

interface Animal1 extends Boi, Vaca {
    peso: number;
}

let animal: Animal1 = {
    tipoCorte: 'nelore',
    peso: 1500,
}

console.log(animal);
console.log('--------------------------------------------');

// ************ Uso do Omit ************
interface Funcionario {
    id: number
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id'> { // Mudando o 'id' para um tipo string
    id: string;
    linguagem: string;
}

let dev: Desenvolvedor = {
    id: 'java-45',
    nome: 'Julio',
    salario: 2000,
    linguagem: 'Java',
}

console.log(dev);