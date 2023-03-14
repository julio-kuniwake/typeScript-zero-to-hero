export { };
// ************ Class com construtor ************
class Pessoa {
    nome: string;
    sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;

    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p = new Pessoa('Julio', 'Kuniwake');
console.log(p.nomeCompleto());
console.log('-----------------------------------------------------------------');

// ************ Class sem construtor ************
class Estudante {
    id: number;
    nome: string;

    mostraEstudante(){
        const estudante = new Estudante();
        estudante.id = 999;
        estudante.nome = 'Ana';
        
        console.log(`Id estudante é: ${estudante.id} , e seu nome é: ${estudante.nome}`);
    }
}

const e = new Estudante();
e.mostraEstudante();





