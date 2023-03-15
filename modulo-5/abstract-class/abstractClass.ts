export { };
// ************ Abstract class ************
abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) {
    }

    abstract retornarSalario(): number; // Assinatura de um metodo abstrato

    get getNomeComnpleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.getNomeComnpleto} - Salário: ${this.retornarSalario()}`;
    }
}
// const func = new Funcionario('Julio', 'Kuniwake'); // Classes abstract não podem ser instanciadas

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number { // É obrigatorio implementar esse metodo abstrato da classe Pai(Funcionario)
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private qtdHorasTrabalhadas: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number { // É obrigatorio implementar esse metodo abstrato da classe Pai(Funcionario)
        return this.valorHora * this.qtdHorasTrabalhadas;
    }
}

const funcJulio = new FuncionarioCLT('Julio', 'Kuniwake', 4200);
const funcCarol = new FuncionarioPJ('Carol', 'Cardoso', 100, 120);

console.log('CLT -> ', funcJulio.emitirContraCheque());
console.log('--------------------------------------------------------');
console.log('JP -> ', funcCarol.emitirContraCheque());
