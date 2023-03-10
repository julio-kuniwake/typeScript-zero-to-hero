// ************ Numeric Enums ************
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Freances"] = 3] = "Freances";
})(Idioma || (Idioma = {}));
;
console.log(Idioma);
// ************ String Enums ************
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log('Todos os dias da semana -> ', Dia);
console.log(Dia.Segunda);
function alimento(c) {
    return 'Alimento mais gostoso!';
}
console.log('Formula 1', alimento(2 /* Comida.Churrasco */));
console.log('Problema!!! -> ', alimento(99));
function alimento2(c) {
    return 'Alimento mais gostoso!';
}
console.log('Formula 2 -> ', alimento2("Churrasco" /* Comida2.Churrasco */));
// console.log('Problema!!! -> ', alimento2(99));
// ************ Quando usar enums? ************
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
var concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Tarefa concluida'
};
if (concluidaTarefa.status == Tarefa.Done) {
    console.log('Enviar email: Tarefa concluida!');
}
