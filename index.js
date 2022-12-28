const cards = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      entry.target.classList.remove('fade-out');
    } else {
      entry.target.classList.add('fade-out');
      entry.target.classList.remove('fade-in');
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});