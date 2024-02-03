function lofi() {
        var iframe = document.querySelector('#youtube');
        if (iframe) {
            iframe.src = iframe.src + '&autoplay=1';
        } else {
            console.error('Elemento de iframe não encontrado.');
        }
    }