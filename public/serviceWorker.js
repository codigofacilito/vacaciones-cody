const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "https://eddyber16.github.io/vacaciones-cody/",
  "https://eddyber16.github.io/vacaciones-cody/fotos",
  "https://eddyber16.github.io/vacaciones-cody/index.html",
  "https://eddyber16.github.io/vacaciones-cody/fotos.html",
  "https://eddyber16.github.io/vacaciones-cody/css/fotos.min.css",
  "https://eddyber16.github.io/vacaciones-cody/css/home.min.css",
  "https://eddyber16.github.io/vacaciones-cody/css/style.min.css",
  "https://eddyber16.github.io/vacaciones-cody/js/app.min.js",
  "https://eddyber16.github.io/vacaciones-cody/js/popUp.min.js",
  "https://eddyber16.github.io/vacaciones-cody/js/navbar.min.js",
  "https://eddyber16.github.io/vacaciones-cody/images/1.jpg",
  "https://eddyber16.github.io/vacaciones-cody/images/1.webp",
  "https://eddyber16.github.io/vacaciones-cody/images/2.webp",
  "https://eddyber16.github.io/vacaciones-cody/images/3.webp",
  "https://eddyber16.github.io/vacaciones-cody/images/4.webp",
  "https://eddyber16.github.io/vacaciones-cody/images/5.webp",
  "https://eddyber16.github.io/vacaciones-cody/images/6.webp",
	"https://eddyber16.github.io/vacaciones-cody/images/checkmark.png",
	"https://eddyber16.github.io/vacaciones-cody/images/cody-verano.png",
	"https://eddyber16.github.io/vacaciones-cody/images/corner_cody.png",
	"https://eddyber16.github.io/vacaciones-cody/images/curso-crear-primera-pagina.png",
	"https://eddyber16.github.io/vacaciones-cody/images/curso-profesional-webdev.png",
	"https://eddyber16.github.io/vacaciones-cody/images/icons/gallery.svg",
  "https://eddyber16.github.io/vacaciones-cody/images/icons/gallery-active.svg",
  "https://eddyber16.github.io/vacaciones-cody/images/icons/gallery-white.svg",
  "https://eddyber16.github.io/vacaciones-cody/images/icons/home.svg",
  "https://eddyber16.github.io/vacaciones-cody/images/icons/home-active.svg",
  "https://eddyber16.github.io/vacaciones-cody/images/icons/home-white.svg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

