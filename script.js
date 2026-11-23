const navigation = [...document.querySelectorAll('nav a')];
function markCurrent(id) {
  navigation.forEach(link => {
    const active = link.hash === '#' + id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting);
  if (visible.length) markCurrent(visible[0].target.id);
}, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
['home', 'about', 'products', 'contacts'].forEach(id => observer.observe(document.getElementById(id)));
navigation.forEach(link => link.addEventListener('click', () => markCurrent(link.hash.slice(1))));
