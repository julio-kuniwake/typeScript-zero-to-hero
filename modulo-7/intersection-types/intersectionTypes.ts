export { };
// ************ Intersection Types ************
interface DadosBancario {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

// Aqui que está fazendo a intersection
type DadosCliente = DadosBancario & Cliente & DadosPessoaFisica;

let dadosCliente: DadosCliente = {
    conta: 12345,
    agencia: 5555,
    banco: 'Banco do Brasil',
    nome: 'Julio',
    email: 'julio.k@gmail',
    cpf: 4564455,
};

console.log(dadosCliente);