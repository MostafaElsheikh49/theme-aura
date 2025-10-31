// assets/js/aura.js — minimal starter
document.addEventListener('DOMContentLoaded', () => {
  // Sticky header shadow on scroll
  const header = document.querySelector('.aura-header');
  const onScroll = () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 4 ? '0 6px 20px rgba(0,0,0,.25)' : 'none';
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});