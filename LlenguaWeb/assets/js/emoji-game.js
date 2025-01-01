let currentEmojiIndex = 0;
let scoreEmoji = 0;
let selectedEmojis = [];
let hintEmojiGiven = false;


// Select 10 random emojis for the game, ensuring no repeats
function initializeEmojiGame() {
  scoreEmoji = 0;
  currentEmojiIndex = 0;
  selectedEmojis = getRandomEmojis(10);
  displayEmojiQuestion();
}

// Randomly select 10 unique emojis from emojiData
function getRandomEmojis(count) {
  const shuffled = emojiData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Display the current emoji question
function displayEmojiQuestion() {
  const emojiObj = selectedEmojis[currentEmojiIndex];
  document.getElementById("emoji-display").innerText = emojiObj.emoji;

  // Select the correct answer
  const correctAnswer = emojiObj.correctWords[Math.floor(Math.random() * emojiObj.correctWords.length)];

  // Select three random incorrect answers
  const incorrectAnswers = shuffleArray(emojiObj.incorrectWords).slice(0, 3);

  // Combine and shuffle answers
  const allAnswers = shuffleArray([correctAnswer, ...incorrectAnswers]);

  // Display answers on buttons
  allAnswers.forEach((answer, index) => {
    const button = document.getElementById(`answer${index + 1}`);
    button.innerText = answer;
    button.onclick = () => checkAnswerEmoji(answer, correctAnswer);
  });
}

// Check if the selected answer is correct
function checkAnswerEmoji(selectedAnswer, correctAnswer) {
    const emojiObj = selectedEmojis[currentEmojiIndex];
  
    if (selectedAnswer === correctAnswer) {
      scoreEmoji++;
      const answerWords = correctAnswer.split(" ");
      
      document.getElementById("emoji-feedback").innerHTML = `✔️Correcte!✔️ ${emojiObj.emoji} =  <a href="https://ca.wiktionary.org/wiki/${answerWords[0]}#Traduccions" target="_blank">${correctAnswer}</a>`;
      hintEmojiGiven = false; // Reset hint for the next question
      nextQuestionEmoji();
    } else {
      if (!hintEmojiGiven) {
        // Show a hint on the first incorrect attempt
      //  document.getElementById("emoji-feedback").innerText = `Incorrecte! Pista: La paraula comença amb "${correctAnswer.charAt(0)}..."`;
        hintEmojiGiven = true;
        switch(savedLanguage)
        {
          case 'en':
            document.getElementById("emoji-feedback").innerText = `Wrong! Hint: The word starts with "${correctAnswer.charAt(0)}"`;
            break;
          case 'ca':
            document.getElementById("emoji-feedback").innerText =  `Incorrecte! Pista: la paraula comença per "${correctAnswer.charAt(0)}..."`;
            break;
          case 'es':
            document.getElementById("emoji-feedback").innerText = `Incorrecto! Pista: la palabra empieza por "${correctAnswer.charAt(0)}"`;
            break;
          case 'sv':
            document.getElementById("emoji-feedback").innerText = `Fel! Ordet börjar på "${correctAnswer.charAt(0)}"`;
            break;
          default:
            document.getElementById("emoji-feedback").innerText =  `Incorrecte! Pista: La paraula comença per "${correctAnswer.charAt(0)}..."`;
            break;
        }
      } else {
        // Reveal the correct answer on the second incorrect attempt
        document.getElementById("emoji-feedback").innerText = `❌Incorrecte!❌ La resposta correcta és: ${emojiObj.emoji} = ${correctAnswer}`;
        hintEmojiGiven = false;
        nextQuestionEmoji();
      }
    }
  }

  function nextQuestionEmoji() {
    currentEmojiIndex++;
    if (currentEmojiIndex < selectedEmojis.length) {
      setTimeout(displayEmojiQuestion, 2000); // Show next question after 2 seconds
    } else {
      setTimeout(endEmojiGame, 2000); // Show final screen after 2 seconds
    }
  }
// End the game and display the scoreEmoji
function endEmojiGame() {
  document.getElementById("emoji-game-container").style.display = "none";
  document.getElementById("emoji-end-screen").style.display = "block";
  document.getElementById("emoji-final-score").innerText = `Your score: ${scoreEmoji}/10`;
}

// Utility function to shuffle an array
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}
