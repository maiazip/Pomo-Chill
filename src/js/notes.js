
document.addEventListener('DOMContentLoaded', function() {
  const btnCopy = document.querySelector('#btnCopy');
  btnCopy.addEventListener('click', copy);

  const btnClear = document.querySelector('#btnClear');
  btnClear.addEventListener('click', clear);

  const btnCopyClear = document.querySelector('#btnCopyClear');
  btnCopyClear.addEventListener('click', copyClear);

  const audioButton = document.querySelector('#btnSpeechRecognition');
  audioButton.addEventListener('click', startRecording);

  // Recuperando o texto salvo no local storage, se existir
  const savedText = localStorage.getItem('notesTextarea');
  if (savedText) {
      document.querySelector('#notesTextarea').value = savedText;
  }

  // Salvando o texto da textarea no local storage
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
      localStorage.removeItem('notesTextarea'); // Removendo do local storage ao limpar
  }

  function copyClear() {
      copy();
      clear();
  }

  function startRecording() {
    const audioButton = document.querySelector('#btnSpeechRecognition');
    audioButton.classList.add('recording'); // Adiciona a classe 'recording' para definir o plano de fundo vermelho

    const recognition = new webkitSpeechRecognition(); // Use webkitSpeechRecognition for Chrome/Safari
    recognition.lang = 'pt-BR'; // Set the language
    recognition.start(); // Start recognition

    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript;
      const textarea = document.querySelector('#notesTextarea');
      textarea.value += result;

      // Salva o conteúdo do textarea no local storage após cada transcrição
      localStorage.setItem('notesTextarea', textarea.value);
    };

    recognition.onerror = function(event) {
      console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.onend = function() {
      audioButton.classList.remove('recording'); // Remove a classe 'recording' quando a gravação termina
    };
  }
});

const credits = document.querySelector('#credits');
const closeCredits = document.querySelector('#btnCloseCredits');
closeCredits.addEventListener('click', () => {
    credits.style.display = 'none';
});