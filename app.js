const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(localStorage.getItem('send')){
        alert('Lo sentimos pero no puedes responder la enucesta dos veces');
    }else{
        localStorage.setItem('send','true');
        form.submit();
    }
})