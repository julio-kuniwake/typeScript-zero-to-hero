var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ************ Uso de Colchetes ************
var frutas = ['Abacaxi', 'Laranja', 'Maça', 'Melancia', 'Manga'];
console.log(frutas[2]);
// ************ Uso de Array Object ************
var fruta1 = ['Uva', 'Pera', 'Limão', 'Pessego'];
console.log(fruta1[1]);
// ************ Uso de Array Object ************
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log('Idiomas -> ', idiomas);
// Usando o push, para acrescentar + 1 idioma
idiomas.push('Japonês');
console.log('Idiomas a mais -> ', idiomas);
// Usando o metodo 'length', para ver o tamanho do array
console.log('O comprimento do array é: ', idiomas.length);
// ************ Exemplo de Array com Spread Operator ************
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
alfabeto = __spreadArray(__spreadArray([], alfabeto, true), ['i', 'j', 'l', 'm', 'n'], false);
console.log('Alfabeto junção usando Spread Operator -> ', alfabeto);
// ************ Exemplo de Arrays com laço de iteração ************
var listLinguagens = new Array('JavaScript', 'Python', 'PHP', 'Java');
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(listLinguagens[i]);
    }
}
funcaoLinguagens(listLinguagens);
