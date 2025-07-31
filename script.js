<script>
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
</script>

<style>
  .nav-links.active {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
>>>>>>> 99f16b6cb4a43076710c7198f66c6cd5da9e8507
