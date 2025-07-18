// Sectors data
const sectors = [
  {
    name: 'Residential Buildings',
    icon: 'fa-house-chimney',
    img: 'images/img_1.webp',
    price: '₹1,00,000'
  },
  {
    name: 'Commercial Complexes',
    icon: 'fa-building',
    img: 'images/img_2.jpg',
    price: '₹2,00,000'
  },
  {
    name: 'Industrial Plants & Warehouses',
    icon: 'fa-industry',
    img: 'images/img_3.jpg',
    price: '₹1,00,000'
  },
  {
    name: 'Transportation (Roads, Highways, Bridges)',
    icon: 'fa-road',
    img: 'images/img_4.webp',
    price: '₹1,00,000'
  },
  {
    name: 'Railway Infrastructure',
    icon: 'fa-train',
    img: 'images/img_5.webp',
    price: '₹1,00,000'
  },
  {
    name: 'Airports',
    icon: 'fa-plane-departure',
    img: 'images/img_14.jpg',
    price: '₹1,00,000'
  },
  {
    name: 'Seaports & Harbors',
    icon: 'fa-anchor',
    img: 'images/img_6.jpg',
    price: '₹1,00,000'
  },
  {
    name: 'Dams & Irrigation Systems',
    icon: 'fa-water',
    img: 'images/img_7.webp',
    price: '₹1,00,000'
  },
  {
    name: 'Urban Development Projects',
    icon: 'fa-city',
    img: 'images/img_8.webp',
    price: '₹1,00,000'
  },
  {
    name: 'Energy Infrastructure (Power Plants, Grids)',
    icon: 'fa-bolt',
    img: 'images/img_9.webp',
    price: '₹1,00,000'
  },
  {
    name: 'Smart Cities',
    icon: 'fa-microchip',
    img: 'images/img_10.jpg',
    price: '₹1,00,000'
  },
  {
    name: 'Educational Institutions',
    icon: 'fa-graduation-cap',
    img: 'images/img_11.webp',
    price: '₹1,00,000'
  },
  {
    name: 'Healthcare Facilities',
    icon: 'fa-hospital',
    img: 'images/img_12.jpg',
    price: '₹1,00,000'
  },
  {
    name: 'Recreational & Sports Complexes',
    icon: 'fa-futbol',
    img: 'images/img_13.webp',
    price: '₹1,00,000'
  },
];

// Initialize sectors
function initializeSectors() {
  const container = document.querySelector('.sections-container');
  if (!container) return;

  sectors.forEach((sector, idx) => {
    const section = document.createElement('div');
    section.className = 'sector-section';

    section.innerHTML = `
      <h2><i class="fa-solid ${sector.icon}"></i> ${sector.name}</h2>
      <button class="sector-btn"><i class="fa-regular fa-image"></i> View Image</button>
      <div class="sector-image">
        <img src="${sector.img}" alt="${sector.name}">
        <div class="sector-price">${sector.price}</div>
      </div>
    `;

    const btn = section.querySelector('.sector-btn');
    const imgDiv = section.querySelector('.sector-image');

    btn.addEventListener('click', () => {
      // Toggle this section's image
      const isVisible = imgDiv.style.display === 'block';
      // Hide all other images first
      document.querySelectorAll('.sector-image').forEach(div => div.style.display = 'none');
      document.querySelectorAll('.sector-btn').forEach(button => button.classList.remove('active'));
      
      if (!isVisible) {
        imgDiv.style.display = 'block';
        btn.classList.add('active');
      } else {
        imgDiv.style.display = 'none';
        btn.classList.remove('active');
      }
    });

    container.appendChild(section);
  });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight - 20; // Extra 20px padding
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
}

// Active link highlighting on scroll
function initializeActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.main-section');
  
  function highlightActiveLink() {
    const scrollPosition = window.scrollY + 150; // Offset for navbar
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink(); // Initial call
}

// Mobile menu functionality
function initializeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
}

// Gallery lightbox functionality
function initializeGalleryLightbox() {
  const galleryImages = document.querySelectorAll('.gallery-img');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxContent = document.querySelector('.lightbox-content');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (galleryImages.length && lightboxModal) {
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        lightboxContent.src = this.src;
        lightboxContent.alt = this.alt;
        lightboxModal.style.display = 'flex';
      });
    });
  }

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', function() {
      lightboxModal.style.display = 'none';
      lightboxContent.src = '';
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', function(e) {
      if (e.target === lightboxModal) {
        lightboxModal.style.display = 'none';
        lightboxContent.src = '';
      }
    });
  }
}

// Form submission handlers
function initializeFormHandlers() {
  // Submit form handler
  const submitForm = document.querySelector('#submit .submit-form');
  if (submitForm) {
    submitForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const projectData = {
        name: formData.get('name'),
        email: formData.get('email'),
        title: formData.get('title'),
        description: formData.get('description'),
        image: formData.get('image')
      };
      
      // Show success message
      alert('Thank you! Your project has been submitted successfully. We will review it and get back to you soon.');
      
      // Reset form
      this.reset();
      
      console.log('Project submitted:', projectData);
    });
  }
  
  // Contact form handler
  const contactForm = document.querySelector('#contact .contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const contactData = {
        name: formData.get('contact_name'),
        email: formData.get('contact_email'),
        message: formData.get('message')
      };
      
      // Show success message
      alert('Thank you for your message! We will get back to you within 24 hours.');
      
      // Reset form
      this.reset();
      
      console.log('Contact message sent:', contactData);
    });
  }
}

// Make all sections visible and scrollable
function initializeScrollableSections() {
  const sections = document.querySelectorAll('.main-section');
  
  sections.forEach(section => {
    section.style.display = 'block';
  });
}

// Add navbar scroll effect
function initializeNavbarScrollEffect() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initializeScrollableSections();
  initializeSectors();
  initializeSmoothScrolling();
  initializeActiveNavigation();
  initializeMobileMenu();
  initializeGalleryLightbox();
  initializeFormHandlers();
  initializeNavbarScrollEffect();
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    
    if (navbar && !navbar.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });
  
  // Handle escape key for lightbox
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const lightboxModal = document.getElementById('lightbox-modal');
      if (lightboxModal && lightboxModal.style.display === 'flex') {
        lightboxModal.style.display = 'none';
        document.querySelector('.lightbox-content').src = '';
      }
    }
  });
});