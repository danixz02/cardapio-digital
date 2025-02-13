function obterParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

function carregarProduto() {
    const nomeBebidaAl = obterParametro('nome');

    fetch("cardapio.json")
        .then(response => response.json())
        .then(data => {
            // Acessa a lista de lanches dentro do cardápio
            const bebidasAlcoolica = data.cardapio.bebidasAlcoolicas;

            // Procura pelo produto correspondente
            const infobeBidasAlcoolica = bebidasAlcoolica.find(lanche => lanche.nome === nomeBebidaAl);

            if (infobeBidasAlcoolica) {
                document.getElementById('tituloBebAlc').innerText = infobeBidasAlcoolica.nome;
                document.getElementById('imgProdBebAlc').src = infobeBidasAlcoolica.imagem;
                /* document.getElementById('ingredientesBebAlc').innerText = infobeBidasAlcoolica.ingredientes.join(", "); */
                document.getElementById('valorBebAlc').innerText = infobeBidasAlcoolica.valor;

                // Atualiza o título da aba
                document.title = infobeBidasAlcoolica.nome + " - Detalhes do Produto";
            } else {
                document.getElementById('tituloBebAlc').innerText = "Produto não encontrado";
                document.getElementById('valorBebAlc').innerText = "";
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