let currentLanguageData = {};
let savedLanguage = 'en';

function changeLanguage(language) {
    savedLanguage = language;
    fetch(`assets/languages/${language}.json`) // Fetch the corresponding JSON file
        .then(response => response.json())
        .then(data => {
            currentLanguageData = data;
            updateContent(data); // Update the page content with the new language data
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: data }));
        })
        .catch(error => console.error("Error loading language file:", error));
}

// Function to update the page content
function updateContent(languageData) {

     // Update elements with data-key attributes for game boxes and descriptions
     const translatableElements = document.querySelectorAll('[data-key]');
     translatableElements.forEach(element => {
         const key = element.getAttribute('data-key'); // Get the key from the data-key attribute
         if (languageData[key]) {
             if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', languageData[key]); // Update placeholder for input fields
            } else {
                element.innerHTML  = languageData[key]; // Update text content 
            }
         }
     });
}

// Add an event listener for the language select dropdown
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value; // Get the selected language
    changeLanguage(selectedLanguage); // Load the content for the selected language
    localStorage.setItem('language', selectedLanguage);
});

// Load the default language (e.g., English)
savedLanguage = localStorage.getItem('language') || 'en'; // Get the saved language or default to English
languageSelect.value = savedLanguage; // Set the dropdown to the saved language
changeLanguage(savedLanguage); // Update the page content to the saved language