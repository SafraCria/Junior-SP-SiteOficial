document.addEventListener("DOMContentLoaded", () => {
  // Botão voltar ao topo
  const topBtn = document.createElement("button");
  topBtn.id = "backToTop";
  topBtn.innerText = "↑";
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Ajuste responsivo para nav vertical (opcional)
  const nav = document.querySelector(".vertical-nav");
  if (nav) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        nav.style.flexDirection = "row";
      } else {
        nav.style.flexDirection = "column";
      }
    });
  }
});


>>>>>>> 99f16b6cb4a43076710c7198f66c6cd5da9e8507
