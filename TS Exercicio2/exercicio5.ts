type StatusPedido = "pendente" | "processando" | "concluindo" | "cancelado";

interface produtos{
    id : number;
    nome : string;
    preco : number;
}

enum PrioridadeDeEnvio {
    baixa = 1,
    média = 2,
    alta  = 3,
}

const meuProduto : produtos = {
    id: 101,
    nome: "Samuel",
    preco: 100.00
}

function exibirdetalhespedidos(produto : produtos, status : StatusPedido, prioridade : PrioridadeDeEnvio){
    console.log("Detalhes do Produto: " + "\nID do produto: " + produto.id + "\nNome do Produto: " + produto.nome + "\nPreço do produto: " + produto.preco);
    console.log("Status do Produto: " + status);
    console.log("Prioridade do produto: " + prioridade);
}

exibirdetalhespedidos(meuProduto, "pendente", 2);
