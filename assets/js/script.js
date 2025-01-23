document.addEventListener('DOMContentLoaded', () => {
    // Log elements to check if they're found
    console.log('Script loaded');
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    
    console.log('Hamburger:', hamburger);
    console.log('Nav Links:', navLinks);

    // Toggle hamburger menu with logging
    hamburger.addEventListener('click', (e) => {
        console.log('Hamburger clicked');
        e.preventDefault();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Handle mobile dropdown
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}); 