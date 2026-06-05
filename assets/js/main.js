// ── Menú móvil ──────────────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// ── Navbar sólido al hacer scroll ───────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.borderBottomColor = window.scrollY > 60
    ? 'rgba(200,167,68,.35)'
    : 'rgba(200,167,68,.15)';
});

// ── Animación de entrada al hacer scroll ────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .pillar, .location-item, .schedule tr')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

// CSS para animaciones (inyectado aquí para no complicar el CSS)
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

// ── Cerrar menú al hacer clic fuera ─────────────────────────────────
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  const btn = document.querySelector('.nav-toggle');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('open');
  }
});
