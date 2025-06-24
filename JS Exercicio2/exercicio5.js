"use strict";
var PrioridadeDeEnvio;
(function (PrioridadeDeEnvio) {
    PrioridadeDeEnvio[PrioridadeDeEnvio["baixa"] = 1] = "baixa";
    PrioridadeDeEnvio[PrioridadeDeEnvio["m\u00E9dia"] = 2] = "m\u00E9dia";
    PrioridadeDeEnvio[PrioridadeDeEnvio["alta"] = 3] = "alta";
})(PrioridadeDeEnvio || (PrioridadeDeEnvio = {}));
const meuProduto = {
    id: 101,
    nome: "Samuel",
    preco: 100.00
};
function exibirdetalhespedidos(produto, status, prioridade) {
    console.log("Detalhes do Produto: " + "\nID do produto: " + produto.id + "\nNome do Produto: " + produto.nome + "\nPreço do produto: " + produto.preco);
    console.log("Status do Produto: " + status);
    console.log("Prioridade do produto: " + prioridade);
}
exibirdetalhespedidos(meuProduto, "pendente", 2);
