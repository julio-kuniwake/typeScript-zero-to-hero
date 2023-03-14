export { };
// ************ public ************
class Estudante {
    id: number;
    nome: string;
}

const estudante = new Estudante();
estudante.id = 555;
estudante.nome = 'Julio';

console.log(`Id: ${estudante.id}, Nome: ${estudante.nome}`);
console.log('----------------------------------------------')

// ************ private ************
class Professor {
    id: number;
    nome: string;
    private idade: number;

    constructor(id: number, nome: string, idade: number) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    getDadosProfessor() {
        return `Id: ${this.id}, Nome: ${this.nome}, Idade: ${this.idade}.`;
    }
}

const prof = new Professor(444, 'Carol', 34);
console.log(prof.getDadosProfessor());
console.log('----------------------------------------------')
// console.log(prof.idade); // Aqui não da certo, pois idade é privado

// ************ protected ************
class Veiculo {
    id: number;
    tipo: string;

    constructor(id: number, tipo: string) {
        this.id = id;
        this.tipo = tipo;
    }
}

class Carro extends Veiculo {
    private potencia: number;

    constructor(id: number, tipo: string, potencia: number) {
        super(id, tipo);
        this.potencia = potencia;
    }

    getValoresVeiculo() {
        return `Id carro: ${this.id}, Tipo carro: ${this.tipo}, Potencia: ${this.potencia}`
    }
}

const carro = new Carro(9888, 'Esportivo', 500);
console.log(carro.getValoresVeiculo());