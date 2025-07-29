function goToSurprise() {
  window.location.href = "enter-name.html";
}
function startMusicAndGo() {
  const audio = new Audio("bg_music.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  audio.play();

  localStorage.setItem("musicPlaying", "true");

  setTimeout(() => {
    window.location.href = "enter-name.html";
  }, 500); // short delay to allow audio to begin
}

