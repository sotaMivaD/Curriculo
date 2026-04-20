function alternarSom() {
  const audio = document.getElementById('meuAudio');
  const icone = document.getElementById('iconeSom');

  if (audio.paused) {
    audio.play();
    icone.innerHTML = "🔊"; // Muda para ícone de som tocando
  } else {
    audio.pause();
    icone.innerHTML = "🔇"; // Muda para ícone de mudo
  }
}
