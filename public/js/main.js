var h = document.documentElement,
    b = document.body,
    scrollTop = 'scrollTop',
    scrollHeight = 'scrollHeight',
    progress = document.querySelector('.progress-indicator'),
    scroll;

document.addEventListener('scroll', function() {
    // console.log('DocumentElement scrollTop ' + h[scrollTop]);
    // console.log('body scrollTop ' + b[scrollTop]);
    // console.log('documentElement scrollHeight ' + h[scrollHeight]);
    // console.log('body scrollHeight ' + b[scrollHeight]);
    // console.log('clientHeight ' + h.clientHeight);
    // console.log('====================')
    scroll = (h[scrollTop] || b[scrollTop]) / ((h[scrollHeight] || b[scrollHeight]) - h.clientHeight) * 100;

    progress.style.setProperty('--scroll', scroll + '%');
});