"use strict";
exports.__esModule = true;
// ************ Exemplo basico do uso do type Object ************
var pessoa = {
    nome: 'Julio',
    sobrenome: 'Kuniwake',
    idade: 34,
    funcao: 'Desenvolvedor'
};
console.log('Objeto pessoa -> ', pessoa);
// ************ Object como parametro de função ************
function onBoarding01(funcionario) {
    return 'Seje bem vindo ' + funcionario.nome;
}
console.log(onBoarding01({ nome: 'Julio Kuniwake' }));
function onBoarding02(p) {
    return ('Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + '.');
}
console.log(onBoarding02({ nome: 'Julio', funcao: 'desenvolvedor' }));
function onBoarding03(p) {
    return ('Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + ' e vai trabalhar com a linguagem ' + p.linguagem);
}
console.log(onBoarding03({ nome: 'Julio', funcao: 'desenvolvedor', linguagem: 'Java' }));
function onBoarding04(p) {
    return ('Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + ' e vai trabalhar com a linguagem ' + p.linguagem);
}
console.log(onBoarding04({ nome: 'Ana', funcao: 'Medica', linguagem: 'Portugues' }));
function onBoarding05(p) {
    return ('Seja bem vindo ' + p.nome + '! ' + 'sua função sera ' + p.funcao + ' e vai trabalhar com a linguagem ' + p.linguagem + ' e seu email sera ' + p.email);
}
console.log(onBoarding05({
    nome: 'Ana',
    funcao: 'Medica',
    linguagem: 'Portugues',
    email: 'ana@email'
}));
var filho = {
    nome: 'Julio',
    sobrenome: 'Kuniwake',
    idade: 34
};
console.log('Herança -> ', filho);
var usuario = {
    nome: 'Julio',
    email: 'julio@email'
};
var admin = {
    nome: 'Julio',
    email: 'julio@email',
    admin: true
};
/* function acessarSistema(usuario: Usuario): Usuario {
    return usuario;
}

console.log('Generics -> ', acessarSistema(usuario)); */
function acessarSistema1(usuario) {
    return usuario;
}
console.log('Usuario -> ', acessarSistema1(usuario));
console.log('Admin -> ', acessarSistema1(admin));
