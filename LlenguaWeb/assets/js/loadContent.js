const GameState = Object.freeze({
    LYRICS_SELECTION: 'lyrics-game',
    LYRICS_PLAYING: 'bon-dia-song',
    EMOJI_GAME: 'emoji-game',
    LEARN_LYRICS: 'learn-lyrics',
    TRANSLATION_QUIZ: 'trans-quiz',
    GAMES_SELECTION: 'games',
    STOP_GAME: 'stop',
});


let currentGameState = GameState.GAMES_SELECTION;

// Function to load content dynamically based on the page name (for example, games.html or any other page)
function loadContent(page, song = null, pages = null, addToHistory = true) {
    const mainContent = document.getElementById('main-content'); // Main content container
    window.scrollTo({
        top: 70,
        behavior: 'smooth' // Optional: Adds a smooth scrolling animation
    }); 
    
    currentGameState = page;
    fetch(`assets/content/${page}.html`) // Fetch the content of the page dynamically
        .then(response => response.text()) // Get the HTML content
        .then(html => {
            mainContent.innerHTML = html; // Replace current content in the main container with the new content
            attachGameLinks(); // Reattach any game link events after content is loaded
            deactivateGame();
            if (page==='lyrics-game')
            {
                attachTagFilterListeners();
            }
            else if (page === 'bon-dia-song')
            {
                if (song)
                {
                    initializeLyricsGame(song);
                }
            }
            else if(page === 'emoji-game')
            {
                initializeEmojiGame();
            }
            else if (page === 'learn-lyrics')
            {

                if(song)
                {
                    initializeLearnWords(song);
                }
                
            }
            else if(page === 'trans-quiz')
            {
                if (pages){
                    if (song)
                    {
                        console.log("Loading with " + pages + " pages");
                        initializeWordGame(song, pages); 
                    }
                }
                else if (song)
                {
                    initializeWordGame(song); 
                }
            }
            else if(page === 'wiktionary-tr-game')
            {
                initializeGameTranslation();
            }
            
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

// Function to attach event listeners for game links after the content is loaded
function attachGameLinks() {
    const gameLinks = document.querySelectorAll('.game-box-link');
    gameLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default link behavior
            const page = link.getAttribute('href').replace('.html', ''); // Get the page to load (remove .html)
            const song = link.getAttribute('data-song');
            const pages = link.getAttribute('data-pages');
            loadContent(page, song, pages); // Load the corresponding page content dynamically
        });
    });
}

// Initial content load (if any) when the page is first loaded (e.g., load games.html)
document.addEventListener('DOMContentLoaded', () => {
    loadContent('games'); // This loads the content of the games page initially
});

window.addEventListener('popstate', (event) => {
    const state = event.state;
    if (state) {
        // Call loadContent with the saved state values
        loadContent(state.page, state.song, state.pages, false); // Prevent adding to history again
    } else {
        // Handle default behavior (e.g., load the homepage if no state exists)
        loadContent('home', null, null, false);
    }
});