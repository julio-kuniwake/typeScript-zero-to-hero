export { };
// ************ Herança ************
class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu: ${distancia} metros.`);
        console.log('-------------------------------------------------');
    }
}

class Cachorro extends Animal {
    latir() {
        console.log('AUUUUUUUUUU');
        console.log('-------------------------------------------------');
    }
}

const c = new Cachorro();
c.latir();
c.mover(5);

// ************ Herança, exemplo 2 ************
class Pessoa {
    constructor(private _nome: string, private _sobrenome: string) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
    }

    getNomeCompleto() {
        return `${this._nome} ${this._sobrenome}`;
    }

    getApresentando(): string {
        return `Meu nome é: ${this._nome} ${this._sobrenome}`;
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, private funcao: string) {
        super(nome, sobrenome);
    }

    getNomeComFuncao(): string {
        return super.getApresentando() + `, e minha função é: ${this.funcao}`;
    }
}

const func = new Funcionario('Julio', 'Kuniwake', 'Desenvolvedor');
console.log(func.getNomeCompleto());
console.log(func.getApresentando());
console.log('-------------------------------------------------');
console.log(func.getNomeComFuncao());