document.querySelectorAll('.footer-item').forEach(item => {
  item.addEventListener('mouseover', event => {
      const imgSrc = event.target.getAttribute('data-img');
      document.getElementById('hero-image').src = imgSrc;
  });
});

