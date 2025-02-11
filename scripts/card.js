
document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar o arquivo JSON
    fetch("cardapio.json")
      .then((response) => response.json())
      .then((data) => {
        // Exibir os lanches
        const lanchesSection = document.getElementById("lanches");
        const templateCard = document.querySelector(".card");
  
        data.cardapio.lanches.forEach((lanches) => {
          
          const lanchesCard = templateCard.cloneNode(true);
          lanchesCard.classList.remove("template"); // Remove a classe que oculta o card
          lanchesCard.style.display = ""; // Mostra o card
  
          // Preenche as informações no card
          lanchesCard.querySelector(".cardImg").src = lanches.imagem;
          lanchesCard.querySelector(".cardImg").alt = lanches.nome;
          lanchesCard.querySelector(".cardTitle").textContent = lanches.nome;
          lanchesCard.querySelector(".cardIngredientes").textContent = lanches.ingredientes;
  
          // Adiciona o card preenchido na lista
          lanchesSection.appendChild(lanchesCard);
        });
      })
      .catch((error) => {
        console.log("Erro ao carregar o arquivo JSON:", error);
      });
  });