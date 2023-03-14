export { };
// ************ Get ************
class Quadrado {
    private _largura = 6;
    private _altura = 12;

     get calcularQuadrado() {
       return this._largura * this._altura;
   } 
}

console.log(new Quadrado().calcularQuadrado);
console.log('--------------------------------------------------');

// ************ Set ************
class Pessoa {
    nome: string;

    retornaNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornaNomePessoa('Julio kuniwake');
console.log('Meu nome é: ', pessoa.nome);
console.log('--------------------------------------------------');

// ************ Get, explicação mais densa ************
class Estudante {
    private _nome = 'Ana Caroline';
    private _semestre: number;
    private _curso: string;

     public get getNomeEstudante() {
       return this._nome;
   }
}

const estudante = new Estudante();
const resultado = estudante.getNomeEstudante;
console.log(resultado);
console.log('--------------------------------------------------');

// ************ Set, explicação mais densa ************
class Estudante_01 {
    nome: string;
    semestre: number;
    curso: string;

    constructor(nome: string, semestre: number, curso: string) {
        this.nome = nome;
        this.semestre = semestre;
        this.curso = curso;
    }

    public get getCursos() {
        return this.curso;
    }

    public set SetCursos(setCurso: string) {
        this.curso = setCurso;
    }
}

const est_01 = new Estudante_01('Julio', 5, 'ADS');
console.log(est_01);
console.log('--------------------------------------------------');

// Setter call
est_01.curso = 'Ciencias da Computação';

// Getter call
console.log('Curso atualizado... ', est_01.getCursos);

// Usar na linha de comando o tsc -t es5 script.ts 
