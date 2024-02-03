document.addEventListener('DOMContentLoaded', function() {
    const btnCopy = document.querySelector('#btnCopy');
    btnCopy.addEventListener('click', copy);

    const btnClear = document.querySelector('#btnClear');
    btnClear.addEventListener('click', clear);

    const btnCopyClear = document.querySelector('#btnCopyClear');
    btnCopyClear.addEventListener('click', copyClear);
    
    function copy() {
      var textarea = document.querySelector('#notesTextarea');
      textarea.select();
      document.execCommand('copy');
      textarea.setSelectionRange(0, 0);
    }

    function clear() {
      var textarea = document.querySelector('#notesTextarea');
      textarea.value = ''; // Limpa o conteúdo da textarea
    }

    function copyClear() {
        copy();
        clear();
    }
  });