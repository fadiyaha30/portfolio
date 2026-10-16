const buttons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
buttons.forEach(button => button.addEventListener('click', () => {
 const selected = button.dataset.filter;
 buttons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
 cards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
 document.getElementById('filter-status').textContent = `${cards.filter(card => !card.hidden).length} skill categories shown.`;
}));
const links = [...document.querySelectorAll('nav a')];
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach(link => { const active = link.hash === `#${visible.target.id}`; link.classList.toggle('active', active); if(active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
 }, { rootMargin: '-15% 0px -50% 0px', threshold: [0, .15, .4] });
 document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
