function startPlay() {
  // hide home screen
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");

  // hide final score card
  const finalScoreCardElement = document.getElementById("final-score-card");
  finalScoreCardElement.classList.add("hidden");

  // show playground screen
  const playgroundSection = document.getElementById("playground");
  playgroundSection.classList.remove("hidden");

  // reset life and score
  const lifeElement = document.getElementById("life-remaining");
  lifeElement.innerText = 5;

  const currentScoreElement = document.getElementById("current-score");
  currentScoreElement.innerText = 0;

  // playing now
  playing();
}

function playing() {
  // generate random alphabet
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];

  // display alphabet
  const displayLetter = document.getElementById("display-alphabet");
  displayLetter.innerText = alphabet;

  const addKeyHighlighter = document.getElementById(alphabet);
  addKeyHighlighter.classList.add("bg-[#FFA500]");
}

// capture keyboard key-press
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function handleKeyboardKeyUpEvent(event) {
  const pressed = event.key;

  const currentLetter = document
    .getElementById("display-alphabet")
    .innerText.toLowerCase();

  // check for match
  if (pressed === currentLetter) {
    // remove previous key highlight
    const removeKeyHighlighter = document.getElementById(currentLetter);
    removeKeyHighlighter.classList.remove("bg-[#FFA500]");
    const currentScoreElement = document.getElementById("current-score");
    const currentScore = currentScoreElement.innerText;
    const newScore = parseInt(currentScore) + 1;
    currentScoreElement.innerText = newScore;
    playing();
  } else {
    const lifeElement = document.getElementById("life-remaining");
    const currentLife = lifeElement.innerText;
    const remainingLife = parseInt(currentLife) - 1;
    lifeElement.innerText = remainingLife;

    if (remainingLife <= 0 || pressed === "Escape") {
      // hide playground screen
      const playgroundSection = document.getElementById("playground");
      playgroundSection.classList.add("hidden");

      // show final score card
      const finalScoreCardElement = document.getElementById("final-score-card");
      finalScoreCardElement.classList.remove("hidden");

      // show total score
      const totalScoreElement = document.getElementById("total-score");
      const currentScore = document.getElementById("current-score").innerText;
      totalScoreElement.innerText = currentScore;

      // clear last selected alphabet highlight

      // display alphabet
      const currentAlphabet =
        document.getElementById("display-alphabet").innerText;

      // remove previous key highlight
      const removeKeyHighlighter = document.getElementById(currentAlphabet);
      removeKeyHighlighter.classList.remove("bg-[#FFA500]");
    }
  }
}
