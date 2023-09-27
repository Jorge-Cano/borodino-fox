document.addEventListener("DOMContentLoaded", function() {

    const menu = document.getElementById('menu');
    const overlay = document.querySelector('.overlay');

    // Toggling the navigation menu
    document.getElementById('menuToggle').addEventListener('click', function(e) {
        // Only toggle if the target is not a link inside the menu
        if (!e.target.closest('a')) {
            console.log("Hamburger menu clicked");
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
                overlay.style.display = 'block';
            } else {
                menu.style.display = 'none';
                overlay.style.display = 'none';
            }
        }
    });

    // Hide the overlay when clicked
    overlay.addEventListener('click', function() {
        console.log("Overlay clicked");
        menu.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[data-scroll]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            console.log(`Link "${this.getAttribute('href')}" clicked`);

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // If on mobile, also close the menu after clicking a link
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    menu.style.display = 'none';
                    // overlay.style.display = 'none';
                }, 300);
            }
        });
    });

    // Back to top functionality
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
    backToTopButton.addEventListener('click', function() {
        document.documentElement.scrollTop = 0;
    });

});
