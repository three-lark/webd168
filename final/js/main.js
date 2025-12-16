/* ===============================
   Hamburger Menu Toggle
================================ */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
  });
});

/* ===============================
   Reveal on Scroll Animation
================================ */
const revealElements = document.querySelectorAll(
  '.project-card, .hero-lander-content, .what-i-do-column, .portfolio-cta, .section-title'
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ===============================
   Circuit Background Scroll Effect (Zoom + Blur)
================================ */
const heroLander = document.querySelector('.hero-lander');

if (heroLander) {
  const updateCircuitBackground = () => {
    const heroRect = heroLander.getBoundingClientRect();
    const heroHeight = heroLander.offsetHeight;
    const scrollProgress = Math.max(0, -heroRect.top / heroHeight);

    // Clamp between 0 and 1.2 to extend effect slightly past hero
    const clampedProgress = Math.min(1.2, Math.max(0, scrollProgress));

    // Calculate scale (zoom from 1x to 5x with easing)
    const easeProgress = clampedProgress * clampedProgress; // quadratic easing
    const scale = 1 + (easeProgress * 4);

    // Calculate opacity (fade out as we zoom)
    const opacity = Math.max(0, 1 - (clampedProgress * 0.9));

    // Calculate blur (blur increases as we zoom)
    const blur = clampedProgress * 3; // up to 3px blur

    // Apply all effects via CSS variables
    heroLander.style.setProperty('--circuit-scale', scale);
    heroLander.style.setProperty('--circuit-opacity', opacity);
    heroLander.style.setProperty('--circuit-blur', `${blur}px`);
  };

  window.addEventListener('scroll', updateCircuitBackground);
  window.addEventListener('resize', updateCircuitBackground);
  updateCircuitBackground();
}

