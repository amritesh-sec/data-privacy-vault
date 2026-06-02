const nav = document.getElementById('siteNav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
const t = document.getElementById('navToggle'), l = document.getElementById('navLinks');
if (t && l) t.addEventListener('click', () => l.classList.toggle('open'));
