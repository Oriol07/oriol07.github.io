let currentWordIndex = 0;
let currentSongToLearnToLearn;

function initializeLearnWords(songId) {
    currentSongToLearn = songs[songId];
    currentWordIndex = 0;
    document.getElementById('prev-button').addEventListener('click', () => navigateWords('prev'));
    document.getElementById('next-button').addEventListener('click', () => navigateWords('next'));

    // Select the element
    const playGameButtonContainer = document.getElementById('play-game-button');

    // Update the data-song attribute
    playGameButtonContainer.setAttribute('data-song', songId);

    displayCurrentWord();
    setupMiniGame()
}

function displayCurrentWord() {
    const wordData = currentSongToLearn.keyWords[currentWordIndex];

    document.getElementById('current-word').innerText = wordData.word;
    document.getElementById('emoji-representation').innerText = wordData.emoji || "";
    if (savedLanguage === 'ca')
    {   
        document.getElementById('word-translation').innerText = " ";
    }
    else
    {
            document.getElementById('word-translation').innerText = wordData.translations[savedLanguage];
    }

    
    document.getElementById('word-description').innerHTML = wordData.description[savedLanguage];
}

function navigateWords(direction) {
    if (direction === 'next' && currentWordIndex < currentSongToLearn.keyWords.length - 1) {
        currentWordIndex++;
    } else if (direction === 'prev' && currentWordIndex > 0) {
        currentWordIndex--;
    }
    displayCurrentWord();
}

function setupMiniGame() {


}





function generateChoices(wordData) {
    const correct = wordData.translations[savedLanguage];
    const incorrect = currentSongToLearn.keyWords
        .filter(word => word.word !== wordData.word)
        .map(word => word.translations[savedLanguage]);
    return shuffleChoices([correct, ...incorrect.slice(0, 2)]);
}

function handleChoice(selected, correct) {
    const feedback = selected === correct ? "Correct!" : "Try Again!";
    document.getElementById('mini-game-feedback').innerText = feedback;
}

function shuffleChoices(array) {
    return array.sort(() => Math.random() - 0.5);
}

