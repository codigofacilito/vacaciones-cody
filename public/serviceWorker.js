const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/reset.css",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
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
