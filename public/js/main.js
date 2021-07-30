function stickyMenu() {
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;


    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove(scrollUp);
            return;
        }
        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
    });
}





stickyMenu();
