function obterParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

function atualizarElemento(id, dados) {
    const elemento = document.getElementById(id);
    if (!elemento) return; // Evita erros se o elemento não existir no HTML

    if (dados && dados.length) {
        elemento.innerText = Array.isArray(dados) ? dados.join(", ") : dados;
        elemento.style.display = "block"; // Garante visibilidade
    } else {
        elemento.style.display = "none"; // Oculta se não houver dados
    }
}

function carregarProduto() {
    const nomeBebidaAl = obterParametro('nome');

    fetch("cardapio.json")
        .then(response => response.json())
        .then(data => {
            const bebidasAlcoolicas = data.cardapio.bebidasAlcoolicas;
            const infobeBidasAlcoolica = bebidasAlcoolicas.find(bebida => bebida.nome === nomeBebidaAl);

            if (infobeBidasAlcoolica) {
                document.getElementById('tituloBebAlc').innerText = infobeBidasAlcoolica.nome;
                document.getElementById('imgProdBebAlc').src = infobeBidasAlcoolica.imagem;
                document.getElementById('valorBebAlc').innerText = infobeBidasAlcoolica.valor;

                atualizarElemento('ingredientesBebAlc', infobeBidasAlcoolica.ingredientes);
                atualizarElemento('tipoBebAlc', infobeBidasAlcoolica.tipo);

                document.title = `${infobeBidasAlcoolica.nome} - Detalhes do Produto`;
            } else {
                document.getElementById('tituloBebAlc').innerText = "Produto não encontrado";
                document.getElementById('valorBebAlc').innerText = "";
                atualizarElemento('ingredientesBebAlc', null);
                atualizarElemento('tipoBebAlc', null);
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o JSON:", error);
            document.getElementById('tituloBebAlc').innerText = "Erro ao carregar os detalhes do produto.";
        });
}

function voltar() {
    window.history.back();
}

window.onload = carregarProduto;
