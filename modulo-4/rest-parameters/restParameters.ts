export { };
// ************ Rest Parameters ************
function somarNum(...numeros: number[]) {
    let total = 0;
    numeros.forEach((num) => (total += num));
    return total;
}

console.log('Exemplo 1 -> ', somarNum(30, 50));
console.log('Exemplo 2 -> ', somarNum(30, 50, 10, 10, 50, 50, 1));
console.log('--------------------------------------------------------')


// ************ Rest Parameters Exemplo 2 ************
function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Na feira tem: ', 'maça', 'abacaxi', 'limao', 'laranja'));
console.log('--------------------------------------------------------')

// ************ Rest Parameters Exemplo 3 usando classe ************
class Produtos {
    // Não teve a necessidade de criar os atributos aqui

    public exibirProdutos(...produtos: string[]): void {
        for (const p of produtos) {
            console.log(p);
        }
    }
};

console.log('Todos os produtos de informatica disponiveis no estoque: ');

const departamentoInformatica: Produtos = new Produtos();
departamentoInformatica.exibirProdutos('Notebook', 'Mouse', 'Monitor', 'Teclado', 'Fonte');