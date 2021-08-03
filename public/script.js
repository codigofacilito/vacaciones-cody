const main = document.querySelector('main');
const load = document.querySelector('.load');

function loadPage(){
    setTimeout(function(){
        load.style.opacity = '0';
        load.style.display = 'none';

        main.style.display = 'block';
        setTimeout(()=> (main.style.opacity = '1'), 50 )
    }, 2500)
}

loadPage();