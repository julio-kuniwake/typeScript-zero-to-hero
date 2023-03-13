// ************ While ************
var contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
// ************ While exemplo 2 ************
var numero = 1;
while (numero <= 20) {
    if (numero % 5 == 0) {
        console.log('O primeiro numero multiplo de 5 entre 1 a 20 é: ', numero);
        break;
    }
    numero++;
}
// ************ While Exemplo mais pratico ************
var contadorUsuario = 0;
var usuario = ['Julio', 'Ana', 'Luna', 'Starkao'];
while (usuario[contadorUsuario]) {
    console.log('Usuarios: ', usuario[contadorUsuario]);
    contadorUsuario++;
}
// ************ do while ************
var contador01 = 0;
do {
    console.log(contador01);
    contador01++;
} while (contador01 < 5);
