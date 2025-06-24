interface pessoa {
    primeiroNome: string;
    ultimoNome? : string;
}

function gerarSaudação(obj : pessoa) : string {
    if (obj.ultimoNome == null){
        console.log("olá " + obj.primeiroNome);
    } else{
        console.log("olá " + obj.primeiroNome + obj.ultimoNome);
    }
}

const meuObjeto : pessoa = {
    primeiroNome: "Samuel ",
    ultimoNome: "Fernandes"
};

gerarSaudação(meuObjeto);