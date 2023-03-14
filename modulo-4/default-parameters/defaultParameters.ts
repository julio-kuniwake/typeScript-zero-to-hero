export { };
// ************ Default Parameters ************
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
};

console.log('Preço com desconto: ', descontoCompra(100));

// ************ Exemplo 2 ************
const exibirMsg = (msg: string, saudar = 'Olá') => {
    return saudar + ' ' + msg + '!';
};

console.log(exibirMsg('Java'));

// ************ Exemplo 3 ************

const exibirNome = (nome: string, sobrenome = 'Kuniwake') => {
    return nome + ' ' + sobrenome;
};

const resultado1 = exibirNome('Julio');
console.log(resultado1);

const resultado2 = exibirNome('Julio', undefined)
console.log(resultado2);
