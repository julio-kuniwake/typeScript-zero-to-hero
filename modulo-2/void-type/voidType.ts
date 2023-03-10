// ************ função void ************
function logError(errorMsg: string): void {
    console.log(errorMsg);
}

logError('É requerido o campo nome');

// ************ função void AeroFunction ************

const logErro2 = (errorMsg: string): void => {
    console.log(errorMsg);
}

logErro2('Required field sobrenome');

// ************ uso de void 'em variaveis' ************
let variavelExemploVoid: void;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);
