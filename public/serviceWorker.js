const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/fotos",
  "/index.html",
  "/fotos.html",
  "/css/fotos.min.css",
  "/css/home.min.css",
  "/css/style.min.css",
  "/js/app.min.js",
  "/js/popUp.min.js",
  "/js/navbar.min.js",
  "/images/1.jpg",
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
	"/images/checkmark.png",
	"/images/cody-verano.png",
	"/images/corner_cody.png",
	"/images/curso-crear-primera-pagina.png",
	"/images/curso-profesional-webdev.png",
	"/images/icons/gallery.svg",
  "/images/icons/gallery-active.svg",
  "/images/icons/gallery-white.svg",
  "/images/icons/home.svg",
  "/images/icons/home-active.svg",
  "/images/icons/home-white.svg"
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

