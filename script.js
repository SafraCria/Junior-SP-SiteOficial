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

.discografia-grid {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}

.album-card {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s;
}

.album-card:hover {
  transform: scale(1.05);
}

.album-card img {
  width: 100%;
  border-radius: 5px;
}



>>>>>>> 99f16b6cb4a43076710c7198f66c6cd5da9e8507
