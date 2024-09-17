document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.getElementById('customCursor');
  const cursorClick = document.getElementById('cursorClick');
  const heroImage = document.getElementById('hero-image');

  // Mouse events
  document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    customCursor.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '1';
  });

  // Touch events
  document.querySelectorAll('.footer-item').forEach(item => {
    item.addEventListener('touchstart', (event) => {
      const imgSrc = event.target.getAttribute('data-img');
      heroImage.src = imgSrc;
    });
  });

  // Mouse events for footer items
  document.querySelectorAll('.footer-item').forEach(item => {
    item.addEventListener('mouseover', (event) => {
      if (window.innerWidth >= 768) {
        cursorClick.style.display = 'block';
        cursorClick.style.opacity = '1';
        cursorClick.style.transform = `translate3d(${item.getBoundingClientRect().left + item.offsetWidth / 2}px, ${item.getBoundingClientRect().top - 20}px, 0)`;
        
        const imgSrc = event.target.getAttribute('data-img');
        heroImage.src = imgSrc;
      }
    });

    item.addEventListener('mouseout', () => {
      if (window.innerWidth >= 768) {
        cursorClick.style.display = 'none';
        cursorClick.style.opacity = '0';
      }
    });
  });
});