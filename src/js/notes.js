
document.addEventListener('DOMContentLoaded', function() {
  const btnCopy = document.querySelector('#btnCopy');
  btnCopy.addEventListener('click', copy);

  const btnClear = document.querySelector('#btnClear');
  btnClear.addEventListener('click', clear);

  const btnCopyClear = document.querySelector('#btnCopyClear');
  btnCopyClear.addEventListener('click', copyClear);

  const audioButton = document.querySelector('#btnSpeechRecognition');
  audioButton.addEventListener('click', startRecording);

  const savedText = localStorage.getItem('notesTextarea');
  if (savedText) {
      document.querySelector('#notesTextarea').value = savedText;
  }

  document.querySelector('#notesTextarea').addEventListener('input', function() {
      localStorage.setItem('notesTextarea', this.value);
  });

  function copy() {
      var textarea = document.querySelector('#notesTextarea');
      textarea.select();
      document.execCommand('copy');
      textarea.setSelectionRange(0, 0);
  }

  function clear() {
      var textarea = document.querySelector('#notesTextarea');
      textarea.value = '';
      localStorage.removeItem('notesTextarea');
  }

  function copyClear() {
      copy();
      clear();
  }

  function startRecording() {
    const audioButton = document.querySelector('#btnSpeechRecognition');
    audioButton.classList.add('recording');

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'pt-BR,en-US';
    recognition.start();

    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript;
      const textarea = document.querySelector('#notesTextarea');
      textarea.value += result;

      localStorage.setItem('notesTextarea', textarea.value);
    };

    recognition.onerror = function(event) {
      console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.onend = function() {
      audioButton.classList.remove('recording');
    };
  }
});

const credits = document.querySelector('.credits');
const closeCredits = document.querySelector('#btnCloseCredits');
closeCredits.addEventListener('click', () => {
    credits.style.display = 'none';
});