// Mobile menu toggle script for navigation bar
// Toggles the .nav-links on mobile when the .mobile-menu-toggle is clicked

document.addEventListener('DOMContentLoaded', function() {
  var toggles = document.querySelectorAll('.mobile-menu-toggle');
  toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      var navLinks = this.parentElement.querySelector('.nav-links');
      if (navLinks) {
        navLinks.style.display = (navLinks.style.display === 'flex' || navLinks.style.display === '') ? 'none' : 'flex';
      }
    });
  });
  // Optional: Hide nav-links on resize if desktop
  window.addEventListener('resize', function() {
    document.querySelectorAll('.nav-links').forEach(function(nav) {
      if (window.innerWidth > 768) {
        nav.style.display = 'flex';
      } else {
        nav.style.display = '';
      }
    });
  });
}); 