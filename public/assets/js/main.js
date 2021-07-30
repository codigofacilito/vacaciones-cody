
// Import templates
fetch("./header.html")
    .then(response => { return response.text() })
    .then(data => { document.querySelector("header").innerHTML = data })

fetch("./footer.html")
    .then(response => { return response.text() })
    .then(data => { document.querySelector("footer").innerHTML = data })


// -- Sticky header
window.onscroll = function() {
    heightFixed();
};

function heightFixed() {

    let wrap = document.getElementsByClassName("wrap");
    let header = document.getElementById("header");
    let menuHeight = header.offsetHeight;

    if (window.pageYOffset >= menuHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Swiper home
if( window.location.pathname=="/public/" || window.location.pathname=="/public/index.html" || window.location.pathname=="/vacaciones-cody/"){
    var swiper = new Swiper('.gallery', {
        effect: 'fade',
        loop: true,
        autoplay: true,
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        }
        
    });
}

// Custom lightbox
$(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {
		
		e.preventDefault();		
		
		let image_href = $(this).attr("href");

		if ($('#lightbox').length > 0) { 	
			$('#content').html(`
				<div class="corner corner--top corner--left"></div>
				<div class="corner corner--top corner--right"></div>
				<img src="${image_href}" />
				<div class="corner corner--bottom corner--left"></div>
				<div class="corner corner--bottom corner--right"></div>	
			`);
			$('#lightbox').show();
		}
		
		else { 			
			let lightbox = `
			<div id="lightbox">
				<div id="content">
				<div class="corner corner--top corner--left"></div>
				<div class="corner corner--top corner--right"></div>
				<img src=" ${image_href} ">
				<div class="corner corner--bottom corner--left"></div>
				<div class="corner corner--bottom corner--right"></div>	
				</div>
			</div>`;

			$('body').append(lightbox);
		}
		
		$('#lightbox').on('click', function() { 
			$('#lightbox').hide();
		});
	});
	


});