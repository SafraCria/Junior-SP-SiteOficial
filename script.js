<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    // Alterna visibilidade do menu
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open'); // para animação no ícone
    });

    // Fecha menu ao clicar em um item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
      });
    });

    // Fecha menu ao rolar a página (opcional)
    window.addEventListener('scroll', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  }
});
=======
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    // Alterna visibilidade do menu
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open'); // para animação no ícone
    });

    // Fecha menu ao clicar em um item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
      });
    });

    // Fecha menu ao rolar a página (opcional)
    window.addEventListener('scroll', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  }
});
>>>>>>> 99f16b6cb4a43076710c7198f66c6cd5da9e8507
