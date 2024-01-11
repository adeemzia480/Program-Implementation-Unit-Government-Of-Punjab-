let currentIndex = 0;

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.dot');

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 2; 
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 2) % 2; 
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// JavaScript to handle dropdowns
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
  dropdown.addEventListener('mouseenter', function () {
    this.querySelector('.dropdown-content').style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', function () {
    this.querySelector('.dropdown-content').style.display = 'none';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  let mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  let navigationMenuLabels = document.querySelector('.navigation-menu_labels');

  mobileMenuToggle.addEventListener('click', function () {
    navigationMenuLabels.classList.toggle('active');
  });
});

(function($) { 
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

document.querySelector('.nav-dropdown').classList.add('flex-column');
