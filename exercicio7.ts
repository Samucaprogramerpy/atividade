let lista : number[] = [1, 2, 3, 4, 5];
let soma : number = 0;

for (let i = 0; i < lista.length; i++) {
  soma += lista[i];
};

console.log(lista);
console.log(lista.push(6));
console.log(lista.pop());
console.log(soma);