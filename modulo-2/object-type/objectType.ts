export { };
// ************ Exemplo basico do uso do type Object ************
const pessoa = {
    nome: 'Julio',
    sobrenome: 'Kuniwake',
    idade: 34,
    funcao: 'Desenvolvedor',
}

console.log('Objeto pessoa -> ', pessoa);

// ************ Object como parametro de função ************
function onBoarding01(funcionario: { nome: string }) {
    return 'Seje bem vindo ' + funcionario.nome;
}

console.log(onBoarding01({ nome: 'Julio Kuniwake' }));

// ************ Object nomeados ************
interface Pessoa {
    nome: string,
    funcao: string
}

function onBoarding02(p: Pessoa) {
    return (
        'Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + '.'
    )
}

console.log(onBoarding02({ nome: 'Julio', funcao: 'desenvolvedor' }));

// ************ Object como type alias ************
type Pessoa01 = {
    nome: string,
    funcao: string,
    linguagem: string
}

function onBoarding03(p: Pessoa01) {
    return (
        'Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + ' e vai trabalhar com a linguagem ' + p.linguagem
    )
}

console.log(onBoarding03({ nome: 'Julio', funcao: 'desenvolvedor', linguagem: 'Java' }));

// ************ Usando optional no object ************
interface Pessoa02 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string; // ? Quer dizer o o email é opcional
}

function onBoarding04(p: Pessoa02) {
    return (
        'Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + ' e vai trabalhar com a linguagem ' + p.linguagem
    )
}

console.log(onBoarding04({ nome: 'Ana', funcao: 'Medica', linguagem: 'Portugues' }));

// ************ Propriedades 'readOnly' ( Quando deseja priobir que os devs não modifiquem um determinado objeto) ************
interface Pessoa03 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string; // Não é possivel que seja gravado, durante a verificação de tipo
}

function onBoarding05(p: Pessoa03) {
    return (
        'Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + ' e vai trabalhar com a linguagem ' + p.linguagem + ' e seu email sera ' + p.email
    )
}

console.log(onBoarding05(
    {
        nome: 'Ana',
        funcao: 'Medica',
        linguagem: 'Portugues',
        email: 'ana@email'
    }));

// ************ Tipos de extensões (heranças) ************
interface Mae {
    nome: string,
}

interface Pai {
    sobrenome: string
}

interface Filho extends Mae, Pai {
    idade: number
}

const filho: Filho = {
    nome: 'Julio',
    sobrenome: 'Kuniwake',
    idade: 34
}

console.log('Herança -> ', filho);


// ************ Tipos de Interseções ************
interface Cachorro {
    raca: string;
}

interface Gato {
    raca: string;
}

type Animal = Cachorro & Gato;

// ************ Generics Objects ************
type Usuario = {
    nome: string;
    email: string;
}
type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Julio',
    email: 'julio@email'
}

const admin: Admin = {
    nome: 'Julio',
    email: 'julio@email',
    admin: true
}

/* function acessarSistema(usuario: Usuario): Usuario {
    return usuario;
}

console.log('Generics -> ', acessarSistema(usuario)); */

function acessarSistema1<T>(usuario: T): T { // Funçaõ generica
    return usuario;
}

console.log('Usuario -> ', acessarSistema1<Usuario>(usuario));
console.log('Admin -> ', acessarSistema1<Admin>(admin));