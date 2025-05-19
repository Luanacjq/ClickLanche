// MENU MOBILE TOGGLE
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// SCROLL SUAVE NOS LINKS DO MENU
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // Fecha o menu mobile após clicar
    navLinks.classList.remove('active');
  });
});
