export { };
// ************ If ************
const permissaoDirigir = 18;

if (permissaoDirigir >= 18) {
    console.log(`Voce tem ${permissaoDirigir} e pode dirigir!`)
}

// ************ If Else ************

const permissaoDirigir1 = 17;

if (permissaoDirigir1 >= 18) {
    console.log(`Voce tem ${permissaoDirigir1} anos, e pode dirigir!`)
} else {
    console.log(`Voce ainda tem ${permissaoDirigir1} anos, e ainda não pode dirigir!`)
}

// ************ If Else If ************
let desconto: number;
let item = 8;

if (item > 0 && item <= 5) {
    desconto = 5;
    console.log(`O desconto sera de ${desconto}%`);
} else if (item > 5 && item <= 10) {
    desconto = 10;
    console.log(`O desconto será de ${desconto}%`);
} else if (item > 10) {
    desconto = 14;
    console.log(`O desconto será de ${desconto}%`);
} else {
    desconto = 0;
    console.log(`O desconto será de ${desconto}%`);
}

// ************ Operador Ternario : ? ************
const idadeVotacao = 19;
const podeVotar = (idadeVotacao >= 18) ? `Sua idade é ${idadeVotacao}, vc pode votar!` : `Sua idade é ${idadeVotacao}, não pode votar!`;
console.log(podeVotar);


