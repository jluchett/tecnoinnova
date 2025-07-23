// Sticky Header
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('active');
  hamburger.innerHTML = navMenu.classList.contains('active') ?
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Form validation
    let valid = true;
    const inputs = this.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        valid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#ddd';
      }
    });

    if (valid) {
      // Simulate form submission
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      this.reset();
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  });
}

// Subscribe form
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    if (emailInput.value) {
      alert('¡Gracias por suscribirte!');
      emailInput.value = '';
    }
  });
}