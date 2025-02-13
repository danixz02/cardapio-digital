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

/* 
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.carousel');

let scrollAmount = 0;
const scrollStep = 210;  // Define o quanto rola para cada clique
let isDragging = false;
let startx, scrollLeft;

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > carousel.scrollWidth - carousel.clientWidth + scrollStep) {
        scrollAmount = 0;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});


carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startx = e.touches[0].pagex - carousel.offsetLeft;
    scrollLeft = scrollAmount;
})
  

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pagex - carousel.offsetLeft;
    const walk = (x - startx ) * 1.5;
    scrollAmount = scrollLeft - walk;

    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = carousel.scrollWidth - carousel.clientWidth;
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`;
})


carousel.addEventListener('touchend', () => {
    isDragging = false;
}) */