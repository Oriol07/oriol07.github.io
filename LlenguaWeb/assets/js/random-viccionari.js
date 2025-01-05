
let currentCategory = "Adjectius_en_català"
let categoryPages = 1;
const maxAttempts = 20;
let GameLogTr = [];

// Fetch a random word from a specific category


async function fetchRandomWord(category) {
    if (currentGameState !== GameState.TRANSLATION_QUIZ) return null;
    try {
        const response = await fetch(`https://ca.wiktionary.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category}&cmlimit=500&format=json&origin=*`);
        const data = await response.json();

        const words = data.query.categorymembers.map(member => member.title);
        if (words.length === 0) {
            throw new Error(`No words found in category "${category}".`);
        }

        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        return randomWord;
    } catch (error) {
        console.error('Error fetching random word:', error);
        throw error;
    }
}
const categoryCache = {};

async function fetchRandomWordWithPages(category, totalPages) {
    if (currentGameState !== GameState.TRANSLATION_QUIZ && currentGameState !== GameState.DIALECT_QUIZ) return null;
    if (!categoryCache[category]) {
        categoryCache[category] = await fetchAllCategoryPages(category, totalPages);
    }

    const words = categoryCache[category];
    if (!words || words.length === 0) {
        throw new Error(`No words found in category "${category}".`);
    }

    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

async function fetchAllCategoryPages(category, totalPages) {
    const words = [];
    let cmcontinue = null;

    for (let i = 0; i < totalPages; i++) {
        const url = `https://ca.wiktionary.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category}&cmlimit=500&format=json&origin=*${cmcontinue ? `&cmcontinue=${cmcontinue}` : ""}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.query && data.query.categorymembers) {
            words.push(...data.query.categorymembers.map(member => member.title));
        }

        if (!data.continue || !data.continue.cmcontinue) {
            break;
        }

        cmcontinue = data.continue.cmcontinue;
    }

    return words;
}


async function fetchTranslationDetails(word) {
    try {
        const response = await fetch(`https://ca.wiktionary.org/w/api.php?action=parse&page=${word}&prop=text&formatversion=2&format=json&origin=*`);
        const data = await response.json();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data.parse.text, "text/html");

        const ipaPronunciations = [];
        const regionMap = {  // Sub-regions mapping
            "central": "oriental",
            "balear": "oriental",
            "alguerès": "oriental",
            "nord-occidental": "occidental",
            "valencià": "occidental"
        };

        // Handle <tbody> table structure
        const ipaTableBody = doc.querySelector("tbody");
        if (ipaTableBody) {
            const rows = ipaTableBody.querySelectorAll("tr");
            rows.forEach(row => {
                const cells = row.querySelectorAll("td");
                if (cells.length === 2) {
                    const regionText = cells[0].textContent.trim().toLowerCase();
                    const subRegions = cells[1].innerHTML.match(/(central|balear|alguerès|nord-occidental|valencià).*?class="IPA".*?>(.*?)<\/span>/g);
                    const audioLinks = cells[1].querySelectorAll("a[rel='nofollow']");
                    

                    if (subRegions) {
                        subRegions.forEach((match, index) => {
                            const [, subRegion, ipa] = match.match(/(central|balear|alguerès|nord-occidental|valencià).*?>(.*?)<\/span>/);
                            const region = regionMap[subRegion.toLowerCase()] || regionText;
                            const audioLink = audioLinks[index]?.href || null;
                            ipa2 = ipa;
                            if (ipa.length > 50)
                            {
                                ipa2 = " ";
                              
                            }
                            ipaPronunciations.push({ region: `${region}: ${subRegion}`, ipa2, audioLink });
                        });
                    } else {
                        // Handle cases without sub-regions
                        const ipaElements = cells[1].querySelectorAll(".IPA");
                        ipaElements.forEach((ipaElement, index) => {
                            const ipa = ipaElement.textContent.trim();
                            const audioLink = audioLinks[index]?.href || null;
                            ipa2 = ipa;
                            if (ipa.length > 50)
                            {
                                ipa2 = " ";
                              
                            }
                            ipaPronunciations.push({ region: regionText, ipa2, audioLink });
                        });
                    }
                }
            });
        }
        else
        {
            const ipaElements = doc.querySelectorAll("span.ext-phonos"); // Select all span elements with the class "ext-phonos"

            ipaElements.forEach(ipaElement => {
                // Find the associated IPA text (if available) and audio links
                const ipa = ipaElement.textContent.trim();
                const audioLink = ipaElement.querySelector("a[rel='nofollow']")?.href || null;

                // Check if IPA text length is greater than 50, and adjust the variable accordingly
                let ipa2 = ipa.length > 50 ? " " : ipa;

                ipaPronunciations.push({ ipa2, audioLink });
            });

            
        }



        return { ipaPronunciations };
    } catch (error) {
        console.error("Error fetching translation details:", error);
        return { ipaPronunciations: [] };
    }
}






async function getWordTranslation(word) {
    if (currentGameState !== GameState.TRANSLATION_QUIZ) return null;
    try {
        const response = await fetch(`https://ca.wiktionary.org/w/api.php?action=parse&format=json&page=${encodeURIComponent(word)}&origin=*`);
        const data = await response.json();

        if (!data.parse || !data.parse.text) {
            console.error('No parse data available.');
            return null;
        }

        // Parse the HTML content from the response
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.parse.text["*"], "text/html");

        // Look for the English translation within the HTML content
        const translationItems = doc.querySelectorAll("li");
        for (const item of translationItems) {
            const textContent = item.textContent.toLowerCase();
            switch(savedLanguage)
            {
            case 'en':
                if (textContent.includes("anglès:")) {
                    // Extract the entire text content of the <li> tag after "Anglès:"
                    const translationText = item.innerText.replace(/Anglès:/i, "").trim();
    
                    // Clean up the translation (remove any extraneous elements like links or additional markup)
                    const cleanedTranslation = translationText
                        .replace(/<span class="gender">.*?<\/span>/g, "")
                        .replace(/\s?(m\.|f\.|n\.)\s?/g, "")
                        .replace(/\s?\(\w+\)\s?/g, "") // Remove language codes like "(en)"ç
                        .trim();

    
                    return cleanedTranslation;
                }
                break;
            case 'ca':
                if (textContent.includes("anglès:")) {
                    // Extract the entire text content of the <li> tag after "Anglès:"
                    const translationText = item.innerText.replace(/Anglès:/i, "").trim();
    
                    // Clean up the translation (remove any extraneous elements like links or additional markup)
                    const cleanedTranslation = translationText
                        .replace(/<span class="gender">.*?<\/span>/g, "")
                        .replace(/\s?(m\.|f\.|inv\.|g\.|n\.)\s?/g, "")
                        .replace(/\s?\(\w+\)\s?/g, "") // Remove language codes like "(en)"ç
                        .trim();
    
                    return cleanedTranslation;
                }
                break;
            case 'es':
                if (textContent.includes("castellà:")) {
                    // Extract the entire text content of the <li> tag after "Castellà:"
                    const translationText = item.innerText.replace(/Castellà:/i, "").trim();
    
                    // Clean up the translation (remove any extraneous elements like links or additional markup)
                    const cleanedTranslation = translationText
                        .replace(/<span class="gender">.*?<\/span>/g, "")
                        .replace(/\s?(m\.|f\.|n\.)\s?/g, "")
                        .replace(/\s?\(\w+\)\s?/g, "") // Remove language codes like "(en)"ç
                   
                        .trim();
    
                    return cleanedTranslation;
                }
                break;
            case 'sv':
                if (textContent.includes("suec:")) {
                    // Extract the entire text content of the <li> tag after "Suec:"
                    const translationText = item.innerText.replace(/Suec:/i, "").trim();
    
                    // Clean up the translation (remove any extraneous elements like links or additional markup)
                    const cleanedTranslation = translationText
                    .replace(/<span class="gender">.*?<\/span>/g, "")
                    .replace(/\s?(m\.|f\.|n\.)\s?/g, "")
                    .replace(/\s?\(\w+\)\s?/g, "") // Remove language codes like "(en)"ç
                        .trim();
    
                    return cleanedTranslation;
                }
                break;
                case 'it':
                    if (textContent.includes("italià:")) {
                        
                        const translationText = item.innerText.replace(/Italià:/i, "").trim();
        
                        
                        const cleanedTranslation = translationText
                        .replace(/<span class="gender">.*?<\/span>/g, "")
                        .replace(/\s?(m\.|f\.|n\.)\s?/g, "")
                        .replace(/\s?\(\w+\)\s?/g, "") // Remove language codes like "(en)"ç
                            .trim();
        
                        return cleanedTranslation;
                    }
                    break;
                    case 'fr':
                        if (textContent.includes("francès:")) {
                            
                            const translationText = item.innerText.replace(/Francès:/i, "").trim();
            
                            
                            const cleanedTranslation = translationText
                                .replace(/<span class="gender">.*?<\/span>/g, "")
                                .replace(/\s?(m\.|f\.|n\.)\s?/g, "")
                                .replace(/\s?\(\w+\)\s?/g, "") // Remove language codes like "(en)"ç
                                .trim();
            
                            return cleanedTranslation;
                        }
                        break;
            
            }
      
        }
        console.warn(`No English translation found for "${word}".`);
        return null;
    } catch (error) {
        console.error("Error fetching translation:", error);
        return null;
    }
}

// Fetch the English translation of a given word
async function getWordTranslation3(word) {
    try {
        const response = await fetch(`https://ca.wiktionary.org/w/api.php?action=query&titles=${word}&format=json&origin=*`);
        const data = await response.json();

        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];

        if (pageId === "-1") {
            return null;
        }

        const parseResponse = await fetch(`https://ca.wiktionary.org/w/api.php?action=parse&pageid=${pageId}&format=json&origin=*`);
        const parseData = await parseResponse.json();
        const pageContent = parseData.parse.text["*"];

        const translationSectionRegex = /<li>Anglès:.*?en:([^<">\s]+)/g;
        const matchTranslation = translationSectionRegex.exec(pageContent);

        if (matchTranslation) {
            const translation = matchTranslation[1].trim();
            return translation;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching translations:', error);
        return null;
    }
}
// Start the game

// Check the user's guess
function checkGuess() {
    const wordDisplay = document.getElementById("word-to-guess-catalan-word-quest");
    const guessInput = document.getElementById("guess-input-catalan-word-quest");
    const feedbackMessage = document.getElementById("feedback-message-catalan-word-quest");

    if (!wordDisplay || !guessInput || !feedbackMessage) {
        console.error("Some DOM elements are missing. Check your HTML structure.");
        return;
    }

    const correctTranslation = wordDisplay.dataset.translation;
    const userGuess = guessInput.value.trim().toLowerCase();

    if (userGuess === correctTranslation.toLowerCase()) {
        feedbackMessage.textContent = "Correct! Well done!";
        feedbackMessage.style.color = "green";
    } else {
        feedbackMessage.textContent = `Incorrect. The correct answer was "${correctTranslation}".`;
        feedbackMessage.style.color = "red";
    }

    // Disable input and buttons
    guessInput.disabled = true;
    document.getElementById("submit-guess-button-catalan-word-quest").disabled = true;
}

// End the game
function endGame() {
    const wordDisplay = document.getElementById("word-to-guess-catalan-word-quest");
    const guessInput = document.getElementById("guess-input-catalan-word-quest");
    const feedbackMessage = document.getElementById("feedback-message-catalan-word-quest");
    const submitButton = document.getElementById("submit-guess-button-catalan-word-quest");
    const endGameButton = document.getElementById("end-game-button-catalan-word-quest");

    if (!wordDisplay || !guessInput || !feedbackMessage || !submitButton || !endGameButton) {
        console.error("Some DOM elements are missing. Check your HTML structure.");
        return;
    }

    // Reset UI
    wordDisplay.textContent = "Press Start to Begin!";
    feedbackMessage.textContent = "";
    guessInput.value = "";
    guessInput.disabled = true;
    submitButton.disabled = true;
    endGameButton.disabled = true;

    console.log("Game ended.");
}





function checkWordExistence(word) {
    fetch(`https://ca.wiktionary.org/w/api.php?action=query&titles=${word}&format=json&origin=*`)
        .then(response => response.json())
        .then(data => {
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0]; // Get the first (and usually only) page ID
            if (pageId === "-1") {
                console.log(`The word "${word}" does not exist in Catalan Wiktionary.`);
            } else {
                console.log(`The word "${word}" exists in Catalan Wiktionary.`);
            }
        })
        .catch(error => {
            console.error('Error checking word existence:', error);
        });
    }

// gamee 
let currentWordIndexTr = 0;
let scoreTr = 0;
let selectedWordsToTr = [];

async function initializeWordGame(category, pages = null, isDialect = false) {


    currentCategory = category;
    categoryPages = pages; 

     // Setup play again button correctly
    setupPlayAgainButton(category, pages, isDialect);


    scoreTr = 0;
    currentWordIndexTr = 0;
    GameLogTr = [];
    selectedWordsToTr = []; 
//    console.log("Initializing game with category:", category, "and pages:", pages);
  //  console.log("Current state - selectedWordsToTr:", selectedWordsToTr, "scoreTr:", scoreTr);
    // Clear feedback and reset styles
    switch(savedLanguage)
    {
        case 'es':
            document.getElementById("word-display").innerText = "Ten paciencia, puede tardar unos segundos en cargar...";
            break;
        case 'en':
            document.getElementById("word-display").innerText = "Wait, we it can take some seconds to download...";
            break;
        case 'sv':
            document.getElementById("word-display").innerText = "Vänta. vi letar efter översättningar...";
            break;
        case 'ca':
            document.getElementById("word-display").innerText = "S'estan cercant traduccions...";
            break
        case 'it':
            document.getElementById("word-display").innerText = "Si prega di attendere, ricerca di nuove traduzioni";
            break;
        case 'fr':
            document.getElementById("word-display").innerText = "Attendez. Ça peut prendre un certain temps...";
            break;
        default:
            document.getElementById("word-display").innerText = "Loading words...";

    }


    
   
    document.getElementById("word-feedback").innerText = "";
    document.getElementById("word-feedback").style.color = "";

    // Reset buttons and display
    const buttons = document.querySelectorAll(".word-answer-button");
    buttons.forEach(button => {
        button.innerText = "";
        button.disabled = false; // Enable buttons
    });

    // Hide end screen, show game container
    document.getElementById("word-end-screen").style.display = "none";
    document.getElementById("word-quiz-container").style.display = "block";

    if (pages)
    {
        if (isDialect)
        {
            // Fetch and display new questions
            getRandomWordsDialect(10, pages).then(words => {
                if (!words.length) {
                // alert("Could not load words. Please try again!");
                    return;
                }
                selectedWordsToTr = words;
                displayWordQuestionDialect();
            }).catch(error => {
                console.error("Error resetting game:", error);
            //   alert("Something went wrong while resetting the game. Please try again!");
            });
        }
        else
        {
            // Fetch and display new questions
            getRandomWordsWithPages(10, pages).then(words => {
                if (!words.length) {
                // alert("Could not load words. Please try again!");
                    return;
                }
                selectedWordsToTr = words;
                displayWordQuestion();
            }).catch(error => {
                console.error("Error resetting game:", error);
            //   alert("Something went wrong while resetting the game. Please try again!");
            });
        }

    }
    else
    {
        // Fetch and display new questions
        getRandomWords(10).then(words => {
            if (!words.length) {
              //  alert("Could not load words. Please try again!");
                return;
            }
            selectedWordsToTr = words;
            displayWordQuestion();
        }).catch(error => {
            console.error("Error resetting game:", error);
           // alert("Something went wrong while resetting the game. Please try again!");
        });
    }
    
}
function setupPlayAgainButton(category, pages, isDialect = false) {
    const playAgainButton = document.getElementById("play-again-button");

    // Remove any existing listener
    const newPlayAgainButton = playAgainButton.cloneNode(true);
    playAgainButton.parentNode.replaceChild(newPlayAgainButton, playAgainButton);

    newPlayAgainButton.addEventListener("click", () => {
        initializeWordGame(category, pages, isDialect);
    });
}

// Fetch random words and their translations
async function getRandomWords(count) {
    const words = [];

    for (let i = 0; i < count; i++) {
        if (currentGameState !== GameState.TRANSLATION_QUIZ) break;
        let attempts = 0;
        let word, translation;

        while (attempts < maxAttempts && currentGameState == GameState.TRANSLATION_QUIZ) {
            try {
              //  console.log(`Fetching word ${i + 1} (attempt ${attempts + 1})`);
                word = await fetchRandomWord(currentCategory);
                translation = await getWordTranslation(word);
                if (translation) break; // Success!
            } catch (error) {
               // console.warn(`Error fetching word ${i + 1}, attempt ${attempts + 1}:`, error);
            }
            attempts++;
        }

        if (translation) {
            const { ipaPronunciations, audioURL } = await fetchTranslationDetails(word);
            words.push({ catalan: word, english: translation, ipaPronunciations, audioURL });
        } else {
            console.error(`Failed to fetch word ${i + 1} after ${maxAttempts} attempts`);
        }
    }

    return words;
}

async function getRandomWordsDialect(count, pages) {
    if (currentGameState !== GameState.DIALECT_QUIZ) return null;

    const fetchTasks = Array.from({ length: count }, async (_, i) => {
        let attempts = 0;
        let word, descriptions = [], ipa = null;

        while (attempts < maxAttempts && currentGameState === GameState.DIALECT_QUIZ) {
            try {
                //console.log(`Fetching word ${i + 1} (attempt ${attempts + 1})`);
                word = await fetchRandomWordWithPages(currentCategory, pages);
                const { descriptions: fetchedDescriptions, ipaPronunciation } = await getWordDetails(word);
                
                if (fetchedDescriptions.length > 0 || ipaPronunciation) {
                    descriptions = fetchedDescriptions;
                    ipa = ipaPronunciation;
                    break; // Success!
                }
            } catch (error) {
              //  console.warn(`Error fetching word ${i + 1}, attempt ${attempts + 1}:`, error);
            }
            attempts++;
        }

        if (descriptions.length > 0 || ipa) {
            return { word, descriptions, ipa };
        }

        console.error(`Failed to fetch word ${i + 1} after ${maxAttempts} attempts`);
        return null;
    });

    const results = await Promise.all(fetchTasks);
    return results.filter(wordData => wordData !== null);
}
async function getWordDetails(word) {
    if (currentGameState !== GameState.DIALECT_QUIZ) return { descriptions: [], ipaPronunciation: null };

    try {
        const response = await fetch(`https://ca.wiktionary.org/w/api.php?action=parse&format=json&page=${encodeURIComponent(word)}&origin=*`);
        const data = await response.json();

        if (!data.parse || !data.parse.text) {
            console.error('No parse data available.');
            return { descriptions: [], ipaPronunciation: null };
        }

        // Parse the HTML content from the response
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.parse.text["*"], "text/html");

        // Fetch descriptions based on the current category
        const descriptions = [];
        const listItems = doc.querySelectorAll("ol li");
        listItems.forEach(item => {
            const textContent = item.textContent.toLowerCase();
            if (textContent.includes(currentCategory.toLowerCase())) {
                descriptions.push(item.textContent.trim());
            }
        });

        // Fetch IPA pronunciation for the current category
        let ipaPronunciation = null;
        const ipaElements = doc.querySelectorAll(".IPA");
        ipaElements.forEach(ipaElement => {
            const parentText = ipaElement.closest("li")?.textContent.toLowerCase() || "";
            if (parentText.includes(currentCategory.toLowerCase())) {
                ipaPronunciation = ipaElement.textContent.trim();
            }
        });

        return { descriptions, ipaPronunciation };
    } catch (error) {
        console.error("Error fetching word details:", error);
        return { descriptions: [], ipaPronunciation: null };
    }
}



async function getRandomWordsWithPages(count, pages) {
    if (currentGameState !== GameState.TRANSLATION_QUIZ) return null;
    const fetchTasks = Array.from({ length: count }, async (_, i) => {
        let attempts = 0;
        let word, translation;
        
        
        while (attempts < maxAttempts && currentGameState === GameState.TRANSLATION_QUIZ) {
            try {
               // console.log(`Fetching word ${i + 1} (attempt ${attempts + 1})`);
                word = await fetchRandomWordWithPages(currentCategory, pages);
                translation = await getWordTranslation(word);
                if (translation) break; // Success!
            } catch (error) {
              //  console.warn(`Error fetching word ${i + 1}, attempt ${attempts + 1}:`, error);
            }
            attempts++;
        }

        if (translation) {
            const { ipaPronunciations, audioURL } = await fetchTranslationDetails(word);
            return { catalan: word, english: translation, ipaPronunciations, audioURL };
        }

        console.error(`Failed to fetch word ${i + 1} after ${maxAttempts} attempts`);
        return null;
    });

    const results = await Promise.all(fetchTasks);
    return results.filter(word => word !== null);
}

function displayWordQuestionDialect() {
    const wordObj = selectedWordsToTr[currentWordIndexTr];
    const wordDisplay = document.getElementById("word-display");
    const ipaDisplay = document.getElementById("ipa-display");
    const descriptionDisplay = document.getElementById("description-display");

    // Display the Catalan word
    if(wordObj.word != null)
        wordDisplay.innerHTML = `${wordObj.word}`;
    
    ipaDisplay.innerHTML = ""; // Clear previous IPA content
    descriptionDisplay.innerHTML = ""; // Clear previous descriptions

    // Display IPA if available
    if (wordObj.ipa) {
        const ipaRow = document.createElement("div");
        ipaRow.textContent = wordObj.ipa;
        ipaRow.classList.add("ipa");
        ipaDisplay.appendChild(ipaRow);
    } else {
      //  ipaDisplay.innerHTML = "<p>No IPA pronunciation available.</p>";
    }

    // Extract the correct description
    const correctAnswer = wordObj.descriptions[0];

    // Select three random incorrect descriptions
    const incorrectAnswers = selectedWordsToTr
        .filter((_, index) => index !== currentWordIndexTr) // Exclude the current word
        .flatMap(word => word.descriptions) // Flatten the descriptions from other words
        .filter(description => description !== correctAnswer) // Ensure no duplication
        .sort(() => 0.5 - Math.random()) // Shuffle the array
        .slice(0, 3); // Pick three incorrect descriptions

    // Combine and shuffle answers
    const allAnswers = shuffleArray([correctAnswer, ...incorrectAnswers]);

    // Display answers on buttons
    allAnswers.forEach((answer, index) => {
        const button = document.getElementById(`answer${index + 1}`);
        button.innerText = answer;
        button.onclick = () => checkAnswerDialect(answer, correctAnswer);
    });

}


// Display the current word question
function displayWordQuestion() {
    const wordObj = selectedWordsToTr[currentWordIndexTr];
    const wordDisplay = document.getElementById("word-display");
    const ipaDisplay = document.getElementById("ipa-display");

    // Display the Catalan word
    if(wordObj.catalan != null)
        wordDisplay.innerHTML = `${wordObj.catalan}`;
    ipaDisplay.innerHTML = ""; // Clear previous IPA content

    // IPA
    if (wordObj.ipaPronunciations && wordObj.ipaPronunciations.length > 0) {
        const groupedByRegion = {};

        // Group pronunciations by region
        wordObj.ipaPronunciations.forEach(({ region, ipa, audioLink }) => {
            if (!groupedByRegion[region]) {
                groupedByRegion[region] = [];
            }
            groupedByRegion[region].push({ ipa, audioLink });
        });

        audioPlayed = false;

        // Display each region if it has an audio link
        Object.entries(groupedByRegion).forEach(([region, details]) => {
            // Check if any of the details has an audioLink
            const hasAudio = details.some(({ audioLink }) => audioLink);

            if (hasAudio) {
                const regionRow = document.createElement("div");
                /*regionRow.classList.add("region-row");

                const regionTitle = document.createElement("strong");
               regionTitle.textContent = `${region}: `;//Don't show region
                regionRow.appendChild(regionTitle); */

                details.forEach(({ ipa, audioLink }, index) => {
                    const ipaSpan = document.createElement("span");
                    ipaSpan.classList.add("ipa");
                    ipaSpan.textContent = ipa;

                     regionRow.appendChild(ipaSpan);

                    if (audioLink && index === 0) { // Attach only one audio button per region
                        const audioButton = document.createElement("button");
                        audioButton.textContent = "🔊 Play";
                        audioButton.classList.add("audio-button");
                        const audio = new Audio(audioLink);

                        if (!audioPlayed) {
                            audio.autoplay = true;
                            audioPlayed = true;
                        }

                        audioButton.onclick = () => audio.play();
                        regionRow.appendChild(audioButton);
                    }

                    if (index < details.length - 1) {
                        regionRow.appendChild(document.createTextNode(", "));
                    }
                });

                ipaDisplay.appendChild(regionRow); 
            }
        });
    } else {
      //  ipaDisplay.innerHTML = "<p>No IPA pronunciations available.</p>";
    }

    // Select the correct answer
    const correctAnswer = wordObj.english;

    // Select three random incorrect answers
    const incorrectAnswers = selectedWordsToTr
        .filter((_, index) => index !== currentWordIndexTr)
        .map(word => word.english)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // Combine and shuffle answers
    const allAnswers = shuffleArray([correctAnswer, ...incorrectAnswers]);

    // Display answers on buttons
    allAnswers.forEach((answer, index) => {
        const button = document.getElementById(`answer${index + 1}`);
        button.innerText = answer;
        button.onclick = () => checkAnswer(answer, correctAnswer);
    });
}



function displayWordDetails(word, ipaPronunciations, audioURL) {
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.innerHTML = `<h2>${word}</h2>`;

    if (ipaPronunciations.length > 0) {
        const ipaList = ipaPronunciations.map(p => `<li>${p.region} ${p.ipa}</li>`).join("");
        wordDisplay.innerHTML += `<ul>${ipaList}</ul>`;
    }

    if (audioURL) {
        const audioButton = document.createElement("button");
        audioButton.textContent = "🔊 Play Audio";
        audioButton.onclick = () => {
            const audio = new Audio(audioURL);
            audio.play();
        };
        wordDisplay.appendChild(audioButton);
    }
}
function checkAnswerDialect(selectedAnswer, correctAnswer) {
    const wordObj = selectedWordsToTr[currentWordIndexTr];
    
    if (selectedAnswer === correctAnswer) {
        scoreTr++;
        document.getElementById("word-feedback").innerText = `✔️ Correcte!  ${correctAnswer}`;
        updateGameLogTr(wordObj.word, selectedAnswer, correctAnswer, true);
    } else {
        document.getElementById("word-feedback").innerText = `❌ Incorrecte!  ${correctAnswer}`;
        updateGameLogTr(wordObj.word, selectedAnswer, correctAnswer, false);
    }

    setTimeout(nextQuestionDialect, 2000);
}

// Check if the selected answer is correct
function checkAnswer(selectedAnswer, correctAnswer) {
    const wordObj = selectedWordsToTr[currentWordIndexTr];
    
    if (selectedAnswer === correctAnswer) {
        scoreTr++;
        document.getElementById("word-feedback").innerText = `✔️ Correcte!  ${correctAnswer}`;
        updateGameLogTr(wordObj.catalan, selectedAnswer, correctAnswer, true);
    } else {
        document.getElementById("word-feedback").innerText = `❌ Incorrecte!  ${correctAnswer}`;
        updateGameLogTr(wordObj.catalan, selectedAnswer, correctAnswer, false);
    }

    setTimeout(nextQuestion, 2000);
}
function nextQuestionDialect() {
    currentWordIndexTr++;
    if (currentWordIndexTr < selectedWordsToTr.length) {
       // document.getElementById("word-feedback").innerText = ""; // Clear feedback
        displayWordQuestionDialect();
    } else {
        endWordGame();
    }
}
function nextQuestion() {
    currentWordIndexTr++;
    if (currentWordIndexTr < selectedWordsToTr.length) {
        document.getElementById("word-feedback").innerText = ""; // Clear feedback
        displayWordQuestion();
    } else {
        endWordGame();
    }
}

// End the game and display the scoreTr
function endWordGame() {
    document.getElementById("word-quiz-container").style.display = "none";
    document.getElementById("word-end-screen").style.display = "block";
//    document.getElementById("word-final-scoreTr").innerText = `Your scoreTr: ${scoreTr}/${selectedWordsToTr.length}`;
}

// Utility function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}


 // Array to store game attempts

// Function to log the player's attempt
function updateGameLogTr(word, playerGuess, correctAnswer, isCorrect) {
    const logContainer = document.getElementById("game-log");
    const logItem = document.createElement("li");
    logItem.className = isCorrect ? "correct" : "incorrect";

    const logText = `${GameLogTr.length + 1}. <a href="https://ca.wiktionary.org/wiki/${word}#Traduccions" target="_blank">${word}</a> = ${playerGuess} (${isCorrect ? "✔️" : "❌"})`;
    logItem.innerHTML = `<span>${logText}</span>`;

    // Add correct answer if the player's guess was wrong
    if (!isCorrect) {
        const correctText = `<span style="font-style: italic; font-size: 0.9em;">Correct: ${correctAnswer}</span>`;
        logItem.innerHTML += ` ${correctText}`;
    }

    // Append log item to the list
    logContainer.insertBefore(logItem, logContainer.firstChild);

    // Add to GameLogTr array (optional: keep for review purposes)
    GameLogTr.push({ word, playerGuess, correctAnswer, isCorrect });
}