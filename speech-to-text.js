const textInput = document.getElementById('text-input');
    const speakBtn = document.getElementById('speak-btn');
    const stopBtn = document.getElementById('stop-btn');
    let word = "iron"

    speakBtn.addEventListener('click', () => {
      // Cancel any ongoing speech before starting
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
      
      // Optional customizations
    utterance.rate = 1;   // Speed: 0.1 to 10 (default is 1)
    utterance.pitch = 1;  // Pitch: 0 to 2 (default is 1)
    utterance.volume = 1; // Volume: 0 to 1 (default is 1)

window.speechSynthesis.speak(utterance);
});    
stopBtn.addEventListener('click', () => {
      window.speechSynthesis.cancel();
    });