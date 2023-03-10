// ************ Never Throw Exception ************
function error(msg: string): never {
    throw new Error(msg);
}

console.log(error('Erro de mensagem 01'))

// ************ Never inferindo automaticamente ************
function rejectMsg() {
    return error('Erro de mensagem 02');
}
console.log(rejectMsg());

// ************ Função que contem loop infinito retorna o tipo 'never' ************

const loopInfinito = function loop() {
    while (true) {
        console.log('Lopp Infinito');
    }
};

// console.log(loopInfinito());

// ************ Diferença entre void vs never ************
const algumaCoisaqVoid: void = null;
// const algumaCoisaNever: never = null;