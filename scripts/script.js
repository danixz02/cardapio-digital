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

const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

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
})