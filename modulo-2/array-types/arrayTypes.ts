// ************ Uso de Colchetes ************
let frutas: string[] = ['Abacaxi', 'Laranja', 'Maça', 'Melancia', 'Manga'];
console.log(frutas[2]);

// ************ Uso de Array Object ************
let fruta1: Array<string> = ['Uva', 'Pera', 'Limão', 'Pessego'];
console.log(fruta1[1]);

// ************ Uso de Array Object ************
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log('Idiomas -> ', idiomas);

// Usando o push, para acrescentar + 1 idioma
idiomas.push('Japonês');
console.log('Idiomas a mais -> ', idiomas);

// Usando o metodo 'length', para ver o tamanho do array
console.log('O comprimento do array é: ', idiomas.length);

// ************ Exemplo de Array com Spread Operator ************
let alfabeto: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
alfabeto = [...alfabeto, 'i', 'j', 'l', 'm', 'n'];
console.log('Alfabeto junção usando Spread Operator -> ', alfabeto);

// ************ Exemplo de Arrays com laço de iteração ************
let listLinguagens: Array<string> = new Array('JavaScript', 'Python', 'PHP', 'Java');

function funcaoLinguagens(linguagens: Array<string>){
    for (let i = 0; i < linguagens.length; i++) {
        console.log(listLinguagens[i]);
    }
}

funcaoLinguagens(listLinguagens);