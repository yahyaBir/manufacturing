document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Function to reset all dropdowns
    const resetDropdowns = () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'none';
            }
        });
    };

    // Function to handle responsive behavior
    const handleResponsive = () => {
        if (window.innerWidth > 768) {
            navLinks.style.removeProperty('display');
            navLinks.style.removeProperty('opacity');
            navLinks.style.removeProperty('transform');
            hamburger.classList.remove('active');
            resetDropdowns();
        }
    };

    // Add resize listener
    window.addEventListener('resize', handleResponsive);

    // Toggle mobile menu with animation
    hamburger.addEventListener('click', () => {
        if (navLinks.style.display === 'block') {
            navLinks.style.opacity = '0';
            navLinks.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        } else {
            navLinks.style.display = 'block';
            setTimeout(() => {
                navLinks.style.opacity = '1';
                navLinks.style.transform = 'translateY(0)';
            }, 10);
        }
        hamburger.classList.toggle('active');
        resetDropdowns();
    });

    // Handle dropdowns in mobile view
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdownLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownContent.style.display = 
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside ONLY in mobile view
    document.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 768;
        const isMenuOpen = navLinks.style.display === 'block';
        const clickedOutside = !navLinks.contains(e.target) && !hamburger.contains(e.target);

        if (isMobile && isMenuOpen && clickedOutside) {
            navLinks.style.opacity = '0';
            navLinks.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
            hamburger.classList.remove('active');
            resetDropdowns();
        }
    });

    // Initial check for screen size
    handleResponsive();
}); 