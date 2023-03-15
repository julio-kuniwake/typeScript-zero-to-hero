export { };
// ************ Propriedade Estatica ************
class Funcionario {
    static contratacoes = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string) {
        Funcionario.contratacoes++;
    }
}

const func1 = new Funcionario('Julio', 'Kuniwake', 'Dev');
const func2 = new Funcionario('Carol', 'Cardoso', 'Medica');

console.log('Qtd contratações: ', Funcionario.contratacoes);
console.log('------------------------------------------------');

// ************ Popriedade Estatica em Metodos ************
class Funcionario1 {
    private static contratacoes = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string) {
        Funcionario1.contratacoes++;
    }

    // Metodo statico
    public static retornaContratacoes() {
        return Funcionario1.contratacoes;
    }
}

const func01 = new Funcionario1('Julio', 'Kuniwake', 'Dev');
const func02 = new Funcionario1('Carol', 'Cardoso', 'Medica');
const func03 = new Funcionario1('Ana', 'Mendonça', 'Medica');

console.log('Qtd contratações: ', Funcionario1.retornaContratacoes());
console.log('------------------------------------------------');

// ************ Popriedade Estatica em Metodos ************
type Raca = 'Shitsu' | 'Buldogue' | 'Pug' | 'Tomba Lata';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static QTD_CACHORROS_VENDIDOS = 0;

    constructor(nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.QTD_CACHORROS_VENDIDOS++;
        console.log('Qtd cachorros vendidos: ', Cachorro.QTD_CACHORROS_VENDIDOS);
    }

    public exibirInformacoes(): void {
        console.log(`O cachorro ${this.nome} tem ${this.idade} anos.`);
    }
}

const cachorro = new Cachorro('Luna', 5, ['Shitsu']);
const cachorro1 = new Cachorro('Stark', 4, ['Tomba Lata']);
const cachorro2 = new Cachorro('Nina', 5, ['Pug']);
