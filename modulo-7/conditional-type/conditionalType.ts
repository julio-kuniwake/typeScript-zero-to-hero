export { };
// ************ Conditional Types ************
type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
};

type Empresa = {
    nome: string;
    cnpj: number;
};

type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;
};

type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praça';
};

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

let endPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua 2',
    cidade: 'São Paulo',
    pais: 'Brasil',
};

let endEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'rua',
};

console.log('End Pessoa: ', endPessoa);
console.log('End Empresa: ', endEmpresa);
console.log('-------------------------------------------')

// ************ Conditional Types exemplo 2 ************

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';

type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

// let arquivoAudio: ArquivoAudio = 'svg'; // Não deixa, ele já verifica e vê que não condiz com o que está pedindo
let arquivoAudio: ArquivoAudio = 'mp3';

console.log(arquivoAudio);