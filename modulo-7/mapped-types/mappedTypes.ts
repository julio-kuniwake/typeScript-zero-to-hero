export { };
// ************ Mapped Type Exemplo 1 ************
type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
}

// { [P in K]: T }
type UsuarioMappedType = { // Deixando todos os atributos com 'Opcional'
    [P in keyof Usuario]?: Usuario[P];
};

let usuMapped: UsuarioMappedType = {
    nome: 'Julio',
    endereco: 'Rua teste',
};

console.log(usuMapped);
console.log('-----------------------------------------------');

// ************ Exemplo de Omit ************
interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numPaginas: number;
}

type Artigo = Omit<Livro, 'numPaginas'>; // Usando Omit, no atributo 'numPaginas'

// ************ Exemplo transformando em Readonly ************
type LivroModelo = Readonly<Livro>;

let livro: LivroModelo = {
    titulo: 'Livro sem titulo',
    autor: 'Qualquer um',
    preco: 10,
    numPaginas: 420,
}

// livro.autor = 'tese'; // Não deixa pois está com ReadOnly
console.log(livro);


