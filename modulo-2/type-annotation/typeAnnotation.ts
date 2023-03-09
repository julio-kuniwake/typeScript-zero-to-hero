// ************ Variaveis ************
let nome: string = "julio";
console.log(nome);

// ************ Arrays ************
let carros: string[] = ["fusca", "uno", "vectra", "ferrari", "bmw"];
console.log(carros);

// ************ Objetos ************
let animal: {
  nome: string;
  idade: number;
  raca: string;
};

animal = { nome: "Luna", idade: 4, raca: "Shitsu" };
console.log(animal);

// ************ Function ************
function multiplicarNum(n1: number, n2:number){
    return n1 * n2;
}

console.log(multiplicarNum(2, 5));
