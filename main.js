let speech = new SpeechSynthesisUtterance();

document.getElementById("speakBtn").addEventListener("click", () => {
  speech.text = document.getElementById("textInput").value;
  window.speechSynthesis.speak(speech);
  console.log("aku di klik");
});
