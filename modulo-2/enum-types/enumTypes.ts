// ************ Numeric Enums ************
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Freances,
};

console.log(Idioma);

// ************ String Enums ************
enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log('Todos os dias da semana -> ', Dia);
console.log(Dia.Segunda);

// ************ Enums, usando com 'const' ************
const enum Comida {
    Hamburger,
    Massa,
    Churrasco,
    Pizza,
    Torta,
}

function alimento(c: Comida) {
    return 'Alimento mais gostoso!'
}

console.log('Formula 1', alimento(Comida.Churrasco));
console.log('Problema!!! -> ', alimento(99));

//  -------------- Maneira menos perigosa --------------
const enum Comida2 {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Churrasco = 'Churrasco',
    Pizza = 'Pizza',
    Torta = 'Torta',
}

function alimento2(c: Comida2) {
    return 'Alimento mais gostoso!'
}

console.log('Formula 2 -> ', alimento2(Comida2.Churrasco));
// console.log('Problema!!! -> ', alimento2(99));

// ************ Quando usar enums? ************

enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Tarefa concluida',
}

if (concluidaTarefa.status == Tarefa.Done) {
    console.log('Enviar email: Tarefa concluida!');
}

