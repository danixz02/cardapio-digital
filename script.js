const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navLink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar o arquivo JSON
    fetch("cardapio.json")
      .then((response) => response.json())
      .then((data) => {
        // Exibir os lanches
        const lanchesSection = document.getElementById("listaLanches");
        const templateCard = document.querySelector(".card.template");
  
        data.cardapio.lanches.forEach((lanches) => {
          
          const lanchesCard = templateCard.cloneNode(true);
          lanchesCard.classList.remove("template"); // Remove a classe que oculta o card
          lanchesCard.style.display = ""; // Mostra o card
  
          // Preenche as informações no card
          lanchesCard.querySelector(".cardImg").src = lanches.imagem;
          lanchesCard.querySelector(".cardImg").alt = lanches.nome;
          lanchesCard.querySelector(".cardTitle").textContent = lanches.nome;
  
          // Adiciona o card preenchido na lista
          lanchesSection.appendChild(lanchesCard);
        });
      })
      .catch((error) => {
        console.log("Erro ao carregar o arquivo JSON:", error);
      });
  });
  