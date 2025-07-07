// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Update button text
            if (mobileNav.classList.contains('active')) {
                mobileMenuToggle.textContent = '✕';
            } else {
                mobileMenuToggle.textContent = '☰';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileNav.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '/' && link.getAttribute('href') === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Add scroll effect to navigation
    let lastScrollTop = 0;
    const topNav = document.querySelector('.top-nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            topNav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            topNav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}); 