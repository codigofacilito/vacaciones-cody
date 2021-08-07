const banner = document.querySelector(".banner");
const bar_container = document.querySelector(".bar-fixed");
const bar_menu = document.querySelector(".bar-menu");
const galery_btn = document.querySelector(".gallery-btn");
const bright_btn = document.querySelector(".bright");
const photos_container = document.querySelector(".photos");
const photos = document.querySelectorAll(".photos > a");
const title = document.querySelector("#title");
const logo = document.querySelector("#goTop");
const logo_icon = document.querySelector(".logo-nav-bar > img");
const footer = document.querySelector("footer");
const page_loader = document.querySelector(".page-loader");
const float_btn = document.querySelector(".theme-float-btn");
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const togglefloat_btn = document.querySelector(
  '.theme-float-btn input[type="checkbox"]'
);

const MIN = 0;
const MAX = 1;
const screenHeight = window.screen.height;
const scrollHeight = document.documentElement.scrollHeight - screenHeight;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  changeMode(currentTheme === "dark");
}

window.addEventListener(
  "load",
  function () {
    let isDarkTheme = currentTheme === "dark";

    setTimeout(() => {
      page_loader.style.display = "none";
    }, 1000);

    toggleSwitch.checked = isDarkTheme;
    togglefloat_btn.checked = isDarkTheme;
  },
  false
);

window.addEventListener(
  "scroll",
  function (e) {
    var moveFloatBtn = -(footer.getBoundingClientRect().top - screenHeight);
    var scrollTop = document.documentElement.scrollTop;
    var opacity = 1 - scrollTop / screenHeight;
    var scrollProgress =
      ((scrollTop - screenHeight) / (scrollHeight - screenHeight)) * 100;

    banner.style.opacity = clamp(opacity, MIN, MAX);

    if (scrollTop >= banner.clientHeight) {
      bar_container.classList.add("set-visibility");
      float_btn.classList.add("set-visibility");
      bar_menu.classList.add("set-opacity");
    } else {
      bar_container.classList.remove("set-visibility");
      float_btn.classList.remove("set-visibility");
      bar_menu.classList.remove("set-opacity");
    }

    title.style.color = "hsl(39, " + scrollProgress + "%, 50%)";
    logo_icon.style.transform = "rotate(" + scrollTop + "deg )";

    if (isOver(bright_btn, 1, 0.8)) bright_btn.classList.add("start-animation");

    animate();

    if (isOver(photos_container, 0.1, 1)) {
      photos.forEach((photo) => {
        photo.classList.remove("fade-shake");
      });
    }

    if (moveFloatBtn > 0) {
      float_btn.style.bottom = moveFloatBtn + 20 + "px";
    } else {
      float_btn.style.bottom = 20 + "px";
    }
  },
  false
);

toggleSwitch.addEventListener("change", switchTheme, false);
togglefloat_btn.addEventListener("change", switchTheme, false);

function isOver(object, objSlide, Y) {
  var objectPosition = object.getBoundingClientRect().top;
  var scroll = screenHeight * Y - objectPosition;
  const end = object.clientHeight * objSlide;

  return scroll >= 0 && scroll <= end ? true : false;
}

function animate(index = 0) {
  if (index == 3) return;

  if (isOver(photos[2], 10, 0.5)) {
    setTimeout(() => {
      photos[2].classList.add("fade-shake");
    }, 200);
  }

  if (isOver(photos[index], 10, 0.5)) {
    setTimeout(() => {
      photos[index].classList.add("fade-shake");
      animate(++index);
    }, 500);
  }
}

galery_btn.addEventListener(
  "mouseover",
  function (e) {
    bright_btn.classList.add("start-animation");
  },
  false
);

bright_btn.addEventListener(
  "animationend",
  function (e) {
    if (e.type === "animationend") {
      bright_btn.classList.remove("start-animation");
    }
  },
  false
);

logo.addEventListener(
  "click",
  function (e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  false
);

function changeMode(isChecked = false) {
  document.body.style.transition = "all 1s";
  if (isChecked) {
    document.documentElement.style.setProperty("--primary-color", "#11091e");
    document.documentElement.style.setProperty("--secondary-color", "#21262D");
    document.documentElement.style.setProperty(
      "--banner-gradient",
      "linear-gradient(#264a69, #264a69 30%, #050928 60%)"
    );
    document.documentElement.style.setProperty(
      "--sun-primary-color",
      "#FDF6EC"
    );
    document.documentElement.style.setProperty(
      "--sun-secondary-color",
      "#D7DBD7"
    );
    document.documentElement.style.setProperty("--sea-opacity", "0.2");
    document.documentElement.style.setProperty("--opacity", "0.6");
    document.documentElement.style.setProperty("--text-color", "whitesmoke");
    document.documentElement.style.setProperty("--title-color", "whitesmoke");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.style.setProperty("--primary-color", "#fff");
    document.documentElement.style.setProperty("--secondary-color", "#fff");
    document.documentElement.style.setProperty(
      "--banner-gradient",
      "linear-gradient(#badce6, #badce6 30%, #56c7ec 60%)"
    );
    document.documentElement.style.setProperty("--sun-primary-color", "orange");
    document.documentElement.style.setProperty(
      "--sun-secondary-color",
      "yellow"
    );
    document.documentElement.style.setProperty("--sea-opacity", "1");
    document.documentElement.style.setProperty("--opacity", "1");
    document.documentElement.style.setProperty(
      "--text-color",
      "rgb(88, 88, 88,)"
    );
    document.documentElement.style.setProperty(
      "--title-color",
      "rgba(0, 0, 0, 0.9)"
    );
    localStorage.setItem("theme", "light");
  }

  toggleSwitch.checked = isChecked;
  togglefloat_btn.checked = isChecked;
}

function switchTheme(e) {
  changeMode(e.target.checked);
}
