let player;
let currentPhraseIndex = 0;
let currentSong = null;
let answerTimer;

currentSong = songs['bonDia'];


let attempts = 0;
let score = 0;
let gameActive = true;
let wasCorrect = false;
let songIDName;

function initializeLyricsGame(selectedSong) {
  songIDName = selectedSong;
  currentSong = songs[selectedSong];
  wasCorrect = false;
  currentPhraseIndex = 0;
  attempts = 0;
  score = 0;
  gameActive = true;
  clearTimeout(answerTimer);
  document.getElementById("lyrics-answer-input").value = "";
  document.getElementById("lyrics-feedback").innerText = "";
  document.getElementById("lyrics-hint").innerText = "";
  document.getElementById("score-display").innerText = `Puntuació: ${score}`;

  if (typeof YT === "undefined" || typeof YT.Player === "undefined") {
    loadYouTubeAPI();
  } else {
    createYouTubePlayer();
  }

     // Add a delay to ensure scrolling is completed before focusing the input
  setTimeout(() => {
      const input = document.getElementById('lyrics-answer-input');
      if (input) {
          input.focus();
      }
   }, 300); // Adjust delay to match your `smooth` scroll timing


}

function loadYouTubeAPI() {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
  createYouTubePlayer();
}

function createYouTubePlayer() {
  player = new YT.Player("lyrics-video-player", {
    height: "315",
    width: "560",
    videoId: currentSong.videoId,
    playerVars: { controls: 0, start: 0 },
    events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange }
  });

}

function onPlayerReady(event) {
  displayCurrentPhrase();
  event.target.playVideo();
  startAnswerTimer();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    startAnswerTimer();
  } else if (event.data === YT.PlayerState.PAUSED) {
    clearTimeout(answerTimer);
  }
}

function startAnswerTimer() {
  clearTimeout(answerTimer);
  answerTimer = setInterval(checkRewindCondition, 1000);
}


function checkRewindCondition() {
  if (!gameActive || currentPhraseIndex >= currentSong.phrases.length) {
    clearTimeout(answerTimer); // Stop the timer if the game isn't active
    endLyricsGame();
    return;
  }

  const currentTime = player.getCurrentTime();
  const userAnswerInput = document.getElementById("lyrics-answer-input");
  if (!userAnswerInput) {
    // Stop further checks if input is missing or player navigated away
    clearTimeout(answerTimer);
    return;
  }

  const userAnswer = userAnswerInput.value.trim().toLowerCase();
  const correctAnswer = currentSong.phrases[currentPhraseIndex].answer;

  

  if (userAnswer === correctAnswer) {
    document.getElementById("lyrics-feedback").innerText = "✔️Correcte!✔️";
    document.getElementById(`lyrics-blank${currentPhraseIndex + 1}`).innerText = correctAnswer;
    score += (10 - attempts);
    document.getElementById("score-display").innerText = `Puntuació: ${score}`;

    wasCorrect = true;
  }

  if (currentTime >= currentSong.phrases[currentPhraseIndex].endTime) {
    if (wasCorrect) {
      moveToNextPhrase(false);
      currentPhraseIndex++; 
      displayCurrentPhrase();
      wasCorrect = false;
    } else {
      rewindVideo();
    }
  }
  
}

function rewindVideo() {
  player.seekTo(currentSong.phrases[currentPhraseIndex].startTime);
  player.playVideo();
  giveHint();
}

function displayCurrentPhrase() {
  if(gameActive)
  {
    document.getElementById("lyrics-text").innerHTML = currentSong.phrases[currentPhraseIndex].text.replace(
      "____",
      `<span class="lyrics-blank" id="lyrics-blank${currentPhraseIndex + 1}"></span>`
    );
  }
}

function giveHint() {
  const correctAnswer = currentSong.phrases[currentPhraseIndex].answer;
  attempts++;
  if (attempts <= correctAnswer.length) {
    const partialAnswer = correctAnswer.slice(0, attempts);
    switch(savedLanguage)
    {
      case 'en':
        document.getElementById("lyrics-hint").innerText = `The word starts with "${partialAnswer}"`;
        break;
      case 'ca':
        document.getElementById("lyrics-hint").innerText = `La paraula comença per "${partialAnswer}"`;
        break;
      case 'es':
        document.getElementById("lyrics-hint").innerText = `La palabra empieza por "${partialAnswer}"`;
        break;
      case 'sv':
        document.getElementById("lyrics-hint").innerText = `Ordet börjar på "${partialAnswer}"`;
        break;
      default:
        document.getElementById("lyrics-hint").innerText = `The word begins with "${partialAnswer}"`;
        break;
    }
  } else {
    revealAnswer();
  }
}

function revealAnswer() {
  const correctAnswer = currentSong.phrases[currentPhraseIndex].answer;
  document.getElementById(`lyrics-blank${currentPhraseIndex + 1}`).innerText = correctAnswer;
  moveToNextPhrase();
}

function checkAnswer() {
  clearTimeout(answerTimer);
  const userAnswer = document.getElementById("lyrics-answer-input").value.trim().toLowerCase();
  const correctAnswer = currentSong.phrases[currentPhraseIndex].answer;

  if (userAnswer === correctAnswer) {
    document.getElementById("lyrics-feedback").innerText = "Correct!";
    document.getElementById(`lyrics-blank${currentPhraseIndex + 1}`).innerText = correctAnswer;
    score += (10 - attempts);
    document.getElementById("score-display").innerText = `Score: ${score}`;
    moveToNextPhrase(false);
    currentPhraseIndex++; 
    displayCurrentPhrase();
  } else {
    document.getElementById("lyrics-feedback").innerText = "Try again!";
    giveHint();
    startAnswerTimer();
  }
}

function moveToNextPhrase(restartVideo = true) {
  //currentPhraseIndex++;
  attempts = 0;
  if (currentPhraseIndex < currentSong.phrases.length) {
    document.getElementById("lyrics-answer-input").value = '';
    document.getElementById("lyrics-feedback").innerText = '';
    document.getElementById("lyrics-hint").innerText = '';
   // displayCurrentPhrase();
    if (restartVideo){
        
        player.seekTo(currentSong.phrases[currentPhraseIndex].startTime);
        
    }
    startAnswerTimer();
  } else {
    // document.getElementById("lyrics-feedback").innerText = "Congratulations! You've completed the game!";
    // player.stopVideo();
    endLyricsGame();
  }
}

function endLyricsGame() {
  gameActive = false;
  document.getElementById("lyrics-content").style.display = "none";
  document.getElementById("congratulations-screen").style.display = "block";
  document.getElementById("final-score").innerText = `Your score: ${score}`;
  player.pauseVideo();
}

function restartGame() {
  score = 0;
  initializeLyricsGame();
  player.seekTo(currentSong.phrases[0].startTime);
  player.playVideo();
}

function deactivateGame() {
  //gameActive = false;
 // clearTimeout(answerTimer);
}

// Example of re-activating the game when returning to the game area
function activateGame() {
  gameActive = true;
  checkRewindCondition();
}

function learnLyrics()
{
  if (songIDName)
  {
    loadContent("learn-lyrics",songIDName, null);
  }

 // console.log(songIDName);
}