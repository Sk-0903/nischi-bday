// Create audio object and store in localStorage if not exists
if (!localStorage.getItem("musicPlaying")) {
  const audio = new Audio("bg_music.mp3");
  audio.loop = true;
  audio.volume = 2.0;
  audio.play();

  // Store reference in window so it doesn’t restart
  window.music = audio;

  // Mark as playing
  localStorage.setItem("musicPlaying", "true");

  // Save playing state on unload
  window.addEventListener("beforeunload", () => {
    audio.pause();
    localStorage.removeItem("musicPlaying");
  });
}
