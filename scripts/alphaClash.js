function startPlay() {
  // hide home screen
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");

  // show playground screen
  const playgroundSection = document.getElementById("playground");
  playgroundSection.classList.remove("hidden");

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

  const removeKeyHighlighter = document.getElementById(alphabet);
  removeKeyHighlighter.classList.add("bg-[#FFA500]");
}
