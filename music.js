if (!localStorage.getItem("musicPlaying")) {
  const audio = new Audio("bg_music.mp3");
  audio.loop = true;
  audio.volume = 0.5;

  audio.play().catch(e => {
    console.log("Autoplay blocked. Will play on user interaction.");
    document.addEventListener("click", () => audio.play(), { once: true });
  });

  window.music = audio;
  localStorage.setItem("musicPlaying", "true");

  // Clear flag when leaving or navigating to the final pages
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("musicPlaying");
  });
}

