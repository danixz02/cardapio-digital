function obterParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

function carregarProduto() {
    const nomeMaisPedidos = obterParametro('nome');

    fetch("cardapio.json")
        .then(response => response.json())
        .then(data => {
            // Acessa a lista de lanches dentro do cardápio
            const maisPedidos = data.cardapio.maisPedidos;

            // Procura pelo produto correspondente
            const infomaisPedidos = maisPedidos.find(lanche => lanche.nome === nomeMaisPedidos);

            if (infomaisPedidos) {
                document.getElementById('tituloMaisPed').innerText = infomaisPedidos.nome;
                document.getElementById('imgProdMaisPed').src = infomaisPedidos.imagem;
                /* document.getElementById('ingredientesMaisPed').innerText = infomaisPedidos.ingredientes.join(", "); */
                document.getElementById('valorMaisPed').innerText = infomaisPedidos.valor;

                // Atualiza o título da aba
                document.title = infomaisPedidos.nome + " - Detalhes do Produto";
            } else {
                document.getElementById('tituloMaisPed').innerText = "Produto não encontrado";
                document.getElementById('valorMaisPed').innerText = "";
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