document.addEventListener('DOMContentLoaded', function() {
  const btnCopy = document.querySelector('#btnCopy');
  btnCopy.addEventListener('click', copy);

  const btnClear = document.querySelector('#btnClear');
  btnClear.addEventListener('click', clear);

  const btnCopyClear = document.querySelector('#btnCopyClear');
  btnCopyClear.addEventListener('click', copyClear);

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
});

const credits = document.querySelector('#credits')
const closeCredits = document.querySelector('#btnCloseCredits')
closeCredits.addEventListener('click', () => {
    credits.style.display = 'none' });