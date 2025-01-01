document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const navMenu = document.querySelector('.header__nav');

    // Ensure elements exist
    if (!menuToggle || !navMenu) return;

    // Add a click event listener to the toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle display property: 'none' or 'flex'
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none'; // Hide the nav
        } else {
            navMenu.style.display = 'block'; // Show the nav
        }
    });
});
