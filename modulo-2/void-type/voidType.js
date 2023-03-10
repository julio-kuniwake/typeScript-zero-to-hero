// ************ função void ************
function logError(errorMsg) {
    console.log(errorMsg);
}
logError('É requerido o campo nome');
// ************ função void AeroFunction ************
var logErro2 = function (errorMsg) {
    console.log(errorMsg);
};
logErro2('Required field sobrenome');
// ************ uso de void 'em variaveis' ************
var variavelExemploVoid;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
