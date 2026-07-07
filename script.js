const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.food-grid .place-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    cards.forEach(card => {
      const tags = card.dataset.tags || '';
      card.style.display = filter === 'all' || tags.includes(filter) ? 'flex' : 'none';
    });
  });
});

const topBtn = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 500);
});
topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
