// assets/js/nav.js

// Select all navigation links and the main content container
const navLinks = document.querySelectorAll('.header__nav-item a');
const mainContent = document.getElementById('main-content');

// Function to load content dynamically based on the page clicked in the nav
function loadNavContent(page, addToHistory = true) {
    fetch(`assets/content/${page}.html`) // Fetch HTML file based on page name
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html; // Load HTML content into main content container
            attachGameLinks(); // Ensure game links work in the new content

            currentGameState = GameState.GAMES_SELECTION;
            if (typeof updateContent === "function") {
                updateContent(currentLanguageData); // Call updateContent() from language.js
            } else {
                console.error("updateContent is not available.");
            }
            
            if (addToHistory) {
                history.pushState({ page, song, pages }, "", `#${page}`);
            }


        })
        .catch(error => console.error('Error loading page content:', error));
}

// Event listener for each navigation link to load corresponding content dynamically
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default page reload
        const page = link.getAttribute('href').replace('.html', ''); // Get page name without extension
        loadNavContent(page); // Load the relevant content
    });
});
