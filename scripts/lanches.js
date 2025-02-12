function obterParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

function carregarProduto() {
    const nomeLanche = obterParametro('nome');

    fetch("cardapio.json")
        .then(response => response.json())
        .then(data => {
            // Acessa a lista de lanches dentro do cardápio
            const lanches = data.cardapio.lanches;

            // Procura pelo produto correspondente
            const infoLanches = lanches.find(lanche => lanche.nome === nomeLanche);

            if (infoLanches) {
                document.getElementById('titulo').innerText = infoLanches.nome;
                document.getElementById('imgProd').src = infoLanches.imagem;
                document.getElementById('ingredientes').innerText = infoLanches.ingredientes.join(", ");
                document.getElementById('valor').innerText = infoLanches.valor;

                // Atualiza o título da aba
                document.title = infoLanches.nome + " - Detalhes do Produto";
            } else {
                document.getElementById('titulo').innerText = "Produto não encontrado";
                document.getElementById('valor').innerText = "";
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o JSON:", error);
            document.getElementById('titulo').innerText = "Erro ao carregar os detalhes do produto.";
        });
}

function voltar() {
    window.history.back();
}

window.onload = carregarProduto;