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
        lancheCard.querySelector(".cardImg").src = lanche.imagem;
        lancheCard.querySelector(".cardImg").alt = lanche.nome;
        lancheCard.querySelector(".cardTitle").textContent = lanche.nome;
       /*  lancheCard.querySelector(".cardIngredientes").innerHTML = `Ingredientes: <br>
        ${lanche.ingredientes.join(", ")}`;
        lancheCard.querySelector(".cardValor").textContent = lanche.valor; */

        // Adiciona o card preenchido na lista
        lanchesSection.appendChild(lancheCard);
      });
    })
    .catch((error) => {
      console.log("Erro ao carregar o arquivo JSON:", error);
    });
});
