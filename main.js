let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.getElementById("voiceSelect");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

document.getElementById("speakBtn").addEventListener("click", () => {
  speech.text = document.getElementById("textInput").value;
  window.speechSynthesis.speak(speech);
  console.log("aku di klik");
});
