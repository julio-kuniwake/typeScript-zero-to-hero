"use strict";
exports.__esModule = true;
// Caso o parametro opcional não seja usado ele sera definido com undefined
// ************ Optional Parameter ************
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id funcionario: ', idPessoa, ', Nome: ', nome);
    if (email != undefined) {
        console.log('Id funcionario: ', idPessoa, ', Nome: ', nome, ', Email: ', email);
    }
}
informarDadosPessoa(8989, 'julio');
informarDadosPessoa(7777, 'Carol', 'carol@gmail');
// ************ Optional Parameter 2 ************
function msgLog(msg, usuarioId) {
    var horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, msg, usuarioId || 'Usuario(a) não conetado(a)');
}
msgLog('Atualizar Página');
msgLog('Usuario(a) logado(a) com sucesso ', 888888);
var p;
p = {
    id: 5555,
    nome: 'Julio'
};
console.log(p);
console.log('O nome é um tipo -> ', typeof (p.nome));
console.log('A idade está como um tipo -> ', typeof (p.idade));
