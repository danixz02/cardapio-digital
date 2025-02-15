function obterParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

function carregarProduto() {
    const nomeBebidaNaoAlc = obterParametro('nome');

    fetch("cardapio.json")
        .then(response => response.json())
        .then(data => {
            // Acessa a lista de lanches dentro do cardápio
            const bebidasNaoAlcoolicas = data.cardapio.bebidasNaoAlcoolicas;

            // Procura pelo produto correspondente
            const infobebidasNaoAlcoolicas = bebidasNaoAlcoolicas.find(lanche => lanche.nome === nomeBebidaNaoAlc);

            if (infobebidasNaoAlcoolicas) {
                document.getElementById('tituloBebNaAlc').innerText = infobebidasNaoAlcoolicas.nome;
                document.getElementById('imgProdBebNaAlc').src = infobebidasNaoAlcoolicas.imagem;
                /* document.getElementById('ingredientesBebAlc').innerText = infobebidasNaoAlcoolicas.ingredientes.join(", "); */
                document.getElementById('valorBebNaAlc').innerText = infobebidasNaoAlcoolicas.valor;

                // Atualiza o título da aba
                document.title = infobebidasNaoAlcoolicas.nome + " - Detalhes do Produto";
            } else {
                document.getElementById('tituloBebNaAlc').innerText = "Produto não encontrado";
                document.getElementById('valorBebNaAlc').innerText = "";
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