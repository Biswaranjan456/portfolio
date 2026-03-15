// main.js — Biswaranjan Patra

// Mobile menu
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => mob.classList.toggle('open'));
function closeMobile() { mob.classList.remove('open'); }
document.addEventListener('click', e => {
  if (!ham.contains(e.target) && !mob.contains(e.target)) mob.classList.remove('open');
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 90);
  });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Active nav
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
const nObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => {
        l.style.color = '';
        if (l.getAttribute('href') === '#' + e.target.id) l.style.color = 'var(--teal)';
      });
    }
  });
}, { threshold: 0.3 });
secs.forEach(s => nObs.observe(s));
