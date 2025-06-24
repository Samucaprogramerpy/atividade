function processarDados(nome : string, idades : number[]){
    console.log("Olá " + nome.toUpperCase() + ", Bem vindo")
    let sum: number = 0;
    
    for (let i = 0; i < idades.length; i++){
        sum += idades[i];
    }

    console.log("somas das idades: " + sum);

    let primeiroElemento : number = idades[0];
    
    if (primeiroElemento % 2 == 0){
        console.log("Esse numero é par")
    } else{
        console.log("esse numero é impar")
    }
}

processarDados("João", [25, 30, 22]);

