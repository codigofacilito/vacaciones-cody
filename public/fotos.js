//slider de fotos

function showPhotos(n) {
  let i;
  let photos = document.getElementsByClassName("photo");
  let minPhotos = document.getElementsByClassName("photo-btn");
  let textPhoto = document.getElementById("text-photo");
  if (n > photos.length) {
    photoIndex = 1;
  }
  if (n < 1) {
    photoIndex = photos.length;
  }
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
    minPhotos[i].className = minPhotos[i].className.replace(" active", "");
  }
  photos[photoIndex - 1].style.display = "block";
  minPhotos[photoIndex - 1].className += " active";
  textPhoto.innerHTML = minPhotos[photoIndex - 1].alt;
}

prev.addEventListener("click", () => {
  showPhotos((photoIndex += -1));
});

next.addEventListener("click", () => {
  showPhotos((photoIndex += 1));
});

minPhotosContainer.addEventListener("click", (event) => {
  const photo = +event.target.dataset.id;
  photoIndex = photo;
  showPhotos(photoIndex);
});

pathActive();
showPhotos(photoIndex);
