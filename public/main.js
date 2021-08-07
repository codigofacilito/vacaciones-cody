const $buttonBar = document.querySelector(".btn-bar");
const $buttonBarClose = document.querySelector("btn-bar--close");
const $navBar = document.querySelector(".navigator-bar");

$buttonBar.addEventListener("click", () => {
  $buttonBar.classList.toggle("active-btn");
  if ($buttonBar.classList.contains("active-btn")) {
    $navBar.classList.remove("hidden");
    $navBar.classList.add("active-navbar");
  } else {
    $navBar.classList.add("hidden");
    $navBar.classList.remove("active-navbar");
  }
});
