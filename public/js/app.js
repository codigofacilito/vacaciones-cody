let btn = document.querySelector(".button");
window.addEventListener("scroll", function(){
	btn.classList.toggle("active", window.scrollY > 230);
});
