// This script enhances the navigation experience by:
// 1. Highlighting active links based on scroll position
// 2. Implementing smooth scrolling for navigation links
// 3. Adding animation effects to elements as they enter the viewport

document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that should be tracked for active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Function to get current scroll position
    function getScrollPosition() {
      return window.scrollY || document.documentElement.scrollTop;
    }
    
    // Function to set active link based on scroll position
    function setActiveLink() {
      const scrollPosition = getScrollPosition() + 100; // Add offset for navbar height
      
      // Check which section is currently in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all links
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          
          // Add active class to corresponding links
          document.querySelectorAll(`a[href*="#${sectionId}"]`).forEach(link => {
            link.classList.add('active');
          });
        }
      });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Only apply to internal links
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Calculate header height for offset
            const headerHeight = document.querySelector('nav').offsetHeight;
            
            window.scrollTo({
              top: targetElement.offsetTop - headerHeight,
              behavior: 'smooth'
            });
            
            // Update URL without page refresh
            history.pushState(null, null, `#${targetId}`);
          }
        }
      });
    });
    
    // Animate elements when they enter the viewport
    function animateOnScroll() {
      const elements = document.querySelectorAll('.slide-up:not(.active)');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('active');
        }
      });
    }
    
    // Event listeners
    window.addEventListener('scroll', function() {
      setActiveLink();
      animateOnScroll();
    });
    
    // Initialize active link and animations on page load
    setActiveLink();
    animateOnScroll();
  });