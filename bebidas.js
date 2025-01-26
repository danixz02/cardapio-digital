
document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar o arquivo JSON
    fetch("cardapio.json")
      .then((response) => response.json())
      .then((data) => {
        // Exibir os lanches
        const lanchesSection = document.getElementById("listaBebidas");
        const templateCard = document.querySelector(".card.template");
  
        data.cardapio.bebidasAlcoolicas.forEach((bebidasAlcoolicas) => {
          
          const bebidasAlcoolicasCard = templateCard.cloneNode(true);
          bebidasAlcoolicasCard.classList.remove("template"); // Remove a classe que oculta o card
          bebidasAlcoolicasCard.style.display = ""; // Mostra o card
  
          // Preenche as informações no card
          bebidasAlcoolicasCard.querySelector(".cardImg").src = bebidasAlcoolicas.imagem;
          bebidasAlcoolicasCard.querySelector(".cardImg").alt = bebidasAlcoolicas.nome;
          bebidasAlcoolicasCard.querySelector(".cardTitle").textContent = bebidasAlcoolicas.nome;
         /*  lancheCard.querySelector(".cardIngredientes").innerHTML = `Ingredientes: <br>
          ${lanche.ingredientes.join(", ")}`;
          lancheCard.querySelector(".cardValor").textContent = lanche.valor; */
  
          // Adiciona o card preenchido na lista
          lanchesSection.appendChild(bebidasAlcoolicasCard);
        });
      })
      .catch((error) => {
        console.log("Erro ao carregar o arquivo JSON:", error);
      });
  });
  