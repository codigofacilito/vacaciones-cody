let imgList = document.querySelectorAll("img");
let modal = document.getElementById("modal");
let imgModal = document.getElementById("img-modal");
let btnClose = document.getElementById("close");

imgList.forEach(element => {
  element.addEventListener("click", function () {
    let imgSrc = element.getAttribute("src");

    showModal(imgSrc);
    hideModal();

  });
});

function showModal(imgSrc) {
  imgModal.setAttribute("src", imgSrc);
  modal.className = "modal-active";

}

function hideModal() {
  btnClose.addEventListener("click", function() {
    modal.className = "modal-inactive";
  });

}