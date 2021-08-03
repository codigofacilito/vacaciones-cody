document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems);
});
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
});
typewriter.typeString("Estas son mis vacaciones").start();

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
// .setPin("#escena1")
var scene1 = new ScrollMagic.Scene({ triggerElement: "#escena1", duration: 370 })
  .on("progress", function (e) {
    document.getElementById("pin1").style.opacity = e.progress;
  })
  .addIndicators({ name: "escena 1" }) // add indicators (requires plugin)
  .addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: "#escena2", duration: 400 })
  .on("progress", function (e) {
    document.getElementById("pin2").style.opacity = e.progress;
  })
  .on("enter leave", function (e) {
    // elemento = document.getElementById("pin2");
    // if (e.type == "enter") {
    //   anime({
    //     targets: elemento,
    //     opacity: 1,
    //     duration: 1800,
    //   });
    // } else {
    //   anime({
    //     targets: elemento,
    //     opacity: 0,
    //     duration: 1800,
    //   });
    // }
  })
  .addIndicators({ name: "escena 2" }) // add indicators (requires plugin)
  .addTo(controller);
