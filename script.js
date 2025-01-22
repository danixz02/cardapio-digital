document.addEventListener("DOMContentLoaded", function () {
  // Função para carregar o arquivo JSON
  fetch("cardapio.json")
    .then((response) => response.json())
    .then((data) => {
      // Exibir os lanches
      const lanchesSection = document.getElementById("listaLanches");
      const templateCard = document.querySelector(".card.template");

      data.cardapio.lanches.forEach((lanche) => {
        
        const lancheCard = templateCard.cloneNode(true);
        lancheCard.classList.remove("template"); // Remove a classe que oculta o card
        lancheCard.style.display = ""; // Mostra o card

        // Preenche as informações no card
        lancheCard.querySelector(".card-img").src = lanche.imagem;
        lancheCard.querySelector(".card-img").alt = lanche.nome;
        lancheCard.querySelector(".card-title").textContent = lanche.nome;
       /*  lancheCard.querySelector(
          ".card-ingredientes"
        ).innerHTML = `Ingredientes: <br>${lanche.ingredientes.join(", ")}`;
        lancheCard.querySelector(".valor").textContent = lanche.valor; */

        // Adiciona o card preenchido na lista
        lanchesSection.appendChild(lancheCard);
      });
    })
    .catch((error) => {
      console.log("Erro ao carregar o arquivo JSON:", error);
    });
});
