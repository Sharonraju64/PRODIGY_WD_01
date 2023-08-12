const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = '#333';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});

const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'orange';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#333';
  });
});
