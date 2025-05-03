// navbar-enhancement.js

/**
 * This script enhances the Navbar functionality by:
 * 1. Managing active states for navigation links
 * 2. Handling scroll effects and animations
 * 3. Improving mobile menu behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll('section[id]');
    
    // Get all navigation links (both desktop and mobile)
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Function to set active navigation link based on current scroll position
    function setActiveNavLink() {
      // Get current scroll position with a small offset for the header
      const scrollPosition = window.scrollY + 100;
      
      // Check each section to see if it's in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // If the current scroll position is within this section
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
      
      // Special case for top of page when no section is active
      if (scrollPosition < (sections[0]?.offsetTop || 500)) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelectorAll(`a[href="/#hero"]`).forEach(link => {
          link.classList.add('active');
        });
      }
    }
    
    // Add smooth scrolling for navigation links
    navLinks.forEach(link => {
      // Only apply to hash links (internal page navigation)
      if (link.getAttribute('href')?.startsWith('#') || link.getAttribute('href')?.includes('/#')) {
        link.addEventListener('click', function(e) {
          // Extract the target section ID
          const href = this.getAttribute('href');
          const targetId = href.includes('/#') ? href.split('/#')[1] : href.substring(1);
          
          // Only proceed if we have a valid target
          if (targetId) {
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              e.preventDefault();
              
              // Get header height for offset
              const headerHeight = document.querySelector('header').offsetHeight;
              
              // Scroll to the target section
              window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
              });
              
              // Update URL without page reload
              history.pushState(null, null, href);
              
              // Handle mobile menu closing if open
              const mobileMenu = document.getElementById('mobile-menu');
              const menuIcon = document.getElementById('menu-icon');
              const closeIcon = document.getElementById('close-icon');
              
              if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (menuIcon && closeIcon) {
                  menuIcon.classList.remove('hidden');
                  closeIcon.classList.add('hidden');
                }
                document.body.style.overflow = '';
              }
            }
          }
        });
      }
    });
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
      // Update active nav link
      setActiveNavLink();
      
      // Handle header appearance
      const header = document.querySelector('header');
      const scrollPosition = window.scrollY;
      
      if (header) {
        if (scrollPosition > 10) {
          header.classList.add('nav-scrolled');
        } else {
          header.classList.remove('nav-scrolled');
        }
      }
    });
    
    // Initialize on page load
    setActiveNavLink();
    
    // Check initial scroll position for header styling
    if (window.scrollY > 10) {
      const header = document.querySelector('header');
      if (header) {
        header.classList.add('nav-scrolled');
      }
    }
    
    // Enhance slide-up animations
    const animateElements = document.querySelectorAll('.slide-up');
    
    if (animateElements.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      animateElements.forEach(element => {
        observer.observe(element);
      });
    }
  });