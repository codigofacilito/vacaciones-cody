const codyModal = document.querySelector("#modal");
const codyPhoto = document.querySelector("#photo");
const codyInfo = document.querySelector("#caption");
const pictureContainer = document.querySelector("#pictureContainer");

pictureContainer.addEventListener("click", (e) => {
  const dataInfo = e.target.dataset;
  if (dataInfo.picture) {
    codyModal.style.display = "block";
    codyPhoto.src = e.target.src;
    codyInfo.innerHTML = e.target.alt;
  }
});

codyModal.addEventListener("click", () => {
  codyModal.style.display = "none";
});
