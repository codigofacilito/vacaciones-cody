window.onload = () => {
  const menubtn = document.getElementById("menu-icon");
  const menu = document.getElementById("nav-ul");
  menubtn.addEventListener("click", () => {
    if (menu.className === "show") {
      menu.classList.remove("show");
    } else {
      menu.classList.add("show");
    }
  });
};
