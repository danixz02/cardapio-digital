function obterParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

function carregarProduto() {
    const nomePorcao = obterParametro('nome');

    fetch("cardapio.json")
        .then(response => response.json())
        .then(data => {
            // Acessa a lista de porcoes dentro do cardápio
            const porcoes = data.cardapio.porcoes;

            // Procura pelo produto correspondente
            const infoporcoes = porcoes.find(porcao => porcao.nome === nomePorcao);

            if (infoporcoes) {
                document.getElementById('tituloPorcao').innerText = infoporcoes.nome;
                document.getElementById('imgProdPor').src = infoporcoes.imagem;
                document.getElementById('ingredientesPorcao').innerText = infoporcoes.ingredientes.join(", ");
                document.getElementById('valorPorcao').innerText = infoporcoes.valor;

                // Atualiza o título da aba
                document.title = infoporcoes.nome + " - Detalhes do Produto";
            } else {
                document.getElementById('tituloPorcao').innerText = "Produto não encontrado";
                document.getElementById('valorPorcao').innerText = "";
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o JSON:", error);
            document.getElementById('tituloPorcao').innerText = "Erro ao carregar os detalhes do produto.";
        });
}

function voltar() {
    window.history.back();
}

window.onload = carregarProduto;
