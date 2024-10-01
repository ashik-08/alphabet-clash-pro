function startPlay() {
  // hide home screen
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");

  // show playground screen
  const playgroundSection = document.getElementById("playground");
  playgroundSection.classList.remove("hidden");
}
