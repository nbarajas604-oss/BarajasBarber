// ── Menú móvil ──────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.js-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ── Navbar sólido al hacer scroll ───────────────────────────────────
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 60
    ? 'rgba(200,167,68,.35)'
    : 'rgba(200,167,68,.15)';
}, { passive: true });

// ── Lightbox galería ────────────────────────────────────────────────
function openLightbox(item) {
  const img = item.querySelector('img');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-img').alt = img.alt;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
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
