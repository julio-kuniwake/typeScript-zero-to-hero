export { };
// ************ Exemplo 1 ************
class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    };
}

const func = new Funcionario(new Date(1988, 7, 16)); // Maneira correta
// func.dataNascimento = new Date(1988, 7, 16) // Assim da ruim

console.log(func);
console.log('-----------------------------------------------------');

// ************ Exemplo 2 ************
// Usando direto no parametro do construtor
class Funcionario_2 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    };
}

// ************ Exemplo 3 ************
class Funcionario_3 {
    nome: string;
    readonly codigoFunc: number;

    constructor(nome: string, codigoFunc: number) {
        this.nome = nome;
        this.codigoFunc = codigoFunc;
    };
}

const funcionario = new Funcionario_3('julio', 2222); // Aqui está OK
funcionario.nome = 'Ana' // Aqui está OK
// funcionario.codigoFunc = 1111; // Aqui da ruim

console.log(funcionario);
console.log('-----------------------------------------------------');


// ************ Exemplo 4 Interface ************
interface IFuncionario{
    id: number;
    nome: string;
}

const funcInterface: Readonly<IFuncionario> = {
    id: 800,
    nome: 'Paulo',
}

// funcInterface.id = 700; // jeito errado

const funcInterface2: IFuncionario = {
    id: 800,
    nome: 'Paulo',
}

funcInterface2.id = 700; // jeito que funciona
funcInterface2.nome = 'Araci';