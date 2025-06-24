function gerarSaudação(obj) {
    if (obj.ultimoNome == null) {
        console.log("olá " + obj.primeiroNome);
    }
    else {
        console.log("olá " + obj.primeiroNome + obj.ultimoNome);
    }
}
var meuObjeto = {
    primeiroNome: "Samuel ",
    ultimoNome: "Fernandes"
};
gerarSaudação(meuObjeto);
