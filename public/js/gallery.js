const photo_viewer = document.querySelector(".photo-viewer");
const close_btn = document.querySelector(".close-btn");
const right_btn = document.querySelector(".right-btn");
const left_btn = document.querySelector(".left-btn");
const photos_container = document.querySelectorAll(".photos-grid div");
const photos = document.querySelectorAll(".photos-grid img");
const thumbnail = document.querySelector(".thumbnail");
const photo = document.querySelector("#photo");
const follow_btn = document.querySelector(".follow-btn");

const circle = document.querySelector(".circle svg");
const post_counter = document.querySelector("#post_counter");

const bar_menu = document.querySelector(".bar-fixed");
const photos_grid = document.querySelector(".photos-grid");
const parallax = document.querySelector(".parallax-efect");
const main_container = document.querySelector("main");
const page_loader = document.querySelector(".page-loader");
const togglefloat_btn = document.querySelector(
  '.theme-float-btn input[type="checkbox"]'
);

const MIN = 0;
const MAX = 1;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const currentTheme = localStorage.getItem("theme");
const isFollowing = localStorage.getItem("following");

if (currentTheme) {
  changeMode(currentTheme === "dark");
}

if (isFollowing) {
  follow_btn.checked = isFollowing === "true";
}

window.addEventListener(
  "load",
  () => {
    var result = getQueryVariable("photoId");

    setTimeout(() => {
      page_loader.style.display = "none";
    }, 1000);

    post_counter.innerHTML = photos.length;

    if (!result) {
      return;
    }

    openPhotoViewer(result);

    circle.classList.add("loader-animation");
  },
  false
);

window.addEventListener(
  "scroll",
  function (e) {
    const scrollHeight = main_container.clientHeight;
    const hiddeNav = scrollHeight - bar_menu.clientHeight / 2;
    var scrollTop = document.documentElement.scrollTop;
    var opacity = scrollTop / scrollHeight;

    parallax.style.opacity = clamp(opacity, MIN, MAX);

    if (scrollTop >= hiddeNav) {
      bar_menu.style.visibility = "hidden";
    } else {
      bar_menu.style.visibility = "visible";
    }
  },
  false
);

togglefloat_btn.addEventListener(
  "change",
  function (e) {
    changeMode(e.target.checked);
  },
  false
);

follow_btn.addEventListener(
  "change",
  function (e) {
    localStorage.setItem("following", e.target.checked);
  },
  false
);

circle.addEventListener(
  "mouseover",
  function (e) {
    circle.classList.add("loader-animation");
  },
  false
);

circle.addEventListener(
  "animationend",
  function (e) {
    if (e.type === "animationend") {
      circle.classList.remove("loader-animation");
    }
  },
  false
);

photos_container.forEach((container) => {
  container.addEventListener(
    "click",
    () => openPhotoViewer(container.id),
    false
  );
});

left_btn.addEventListener(
  "click",
  function (e) {
    var newphotoId = parseInt(photo.id, 10) - 1;

    setPhoto(newphotoId);

    setButtons(newphotoId);
  },
  false
);

right_btn.addEventListener(
  "click",
  function (e) {
    var newphotoId = parseInt(photo.id, 10) + 1;

    setPhoto(newphotoId);

    setButtons(newphotoId);
  },
  false
);

close_btn.addEventListener(
  "click",
  function (e) {
    photo_viewer.classList.remove("active");
    right_btn.classList.remove("disable");
    left_btn.classList.remove("disable");
  },
  false
);

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }

  return false;
}

function openPhotoViewer(photoId) {
  setPhoto(photoId);

  setButtons(photoId);

  photo_viewer.classList.add("active");
}

function setPhoto(photoId) {
  photo.src = photos[photoId].currentSrc;
  thumbnail.src = photos[photoId].currentSrc;
  photo.id = photoId;
}

function setButtons(photoId) {
  if (photoId == 0) {
    left_btn.classList.add("disable");
  } else if (photoId >= photos.length - 1) {
    right_btn.classList.add("disable");
  } else {
    left_btn.classList.remove("disable");
    right_btn.classList.remove("disable");
  }
}

function changeMode(isChecked = false) {
  document.body.style.transition = "all 1s";
  if (isChecked) {
    document.documentElement.style.setProperty("--primary-color", "#11091e");
    document.documentElement.style.setProperty("--secondary-color", "#21262D");
    document.documentElement.style.setProperty("--text-color", "whitesmoke");
    document.documentElement.style.setProperty("--title-color", "whitesmoke");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.style.setProperty("--primary-color", "#fff");
    document.documentElement.style.setProperty("--secondary-color", "#fff");
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

  togglefloat_btn.checked = isChecked;
}
