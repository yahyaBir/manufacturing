document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    const dropdownLink = document.querySelector('.dropdown > a');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Debug logs
    console.log('Elements found:', {
        hamburger,
        navLinks,
        dropdown,
        dropdownLink,
        dropdownContent
    });

    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.onclick = function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        }
    }

    // Dropdown toggle
    if (dropdownLink && dropdownContent) {
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                console.log('Dropdown clicked'); // Debug log
                
                // Toggle dropdown visibility
                dropdownContent.style.display = 
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
                
                // Toggle active class for rotation of dropdown icon
                this.classList.toggle('active');
                
                console.log('Dropdown display:', dropdownContent.style.display); // Debug log
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!dropdown.contains(e.target)) {
                dropdownContent.style.display = 'none';
                dropdownLink.classList.remove('active');
            }
        }
    });
}); 