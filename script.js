let lastScrollTop = 0;
const navbar = document.querySelector(".nav");
const navbarHeight = navbar.offsetHeight;

window.addEventListener(
  "scroll",
  function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll para baixo
      navbar.style.top = `-${navbarHeight}px`; // Move a barra de navegação para cima para escondê-la completamente
    } else {
      // Scroll para cima
      navbar.style.top = "0"; // Mostra a barra de navegação
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para tratar o caso de rolar para cima no topo da página
  },
  false
);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}