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

function gallery() {
    const swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                slidesPerColumn: 2,
                spaceBetween: 30
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                slidesPerColumn: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                slidesPerColumn: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            767: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 30
            }
        }
    });
}





stickyMenu();
gallery();
