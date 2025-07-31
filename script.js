// script.js

// Menu Mobile Toggle
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('active');
});

// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Efeito de clique nos links de contato (copiar e feedback)
const emailLink = document.querySelector('a[href^="mailto:"]');
emailLink?.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailLink.textContent.trim();
  navigator.clipboard.writeText(email);
  alert("📋 E-mail copiado: " + email);
});



>>>>>>> 99f16b6cb4a43076710c7198f66c6cd5da9e8507
