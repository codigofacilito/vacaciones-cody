document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems);
  var elems = document.querySelectorAll(".materialboxed");
  var instances = M.Materialbox.init(elems);
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
// if (e.type == "enter") {
var scene1 = new ScrollMagic.Scene({ triggerElement: "#escena1", duration: 200 })
  .on("progress", function (e) {
    document.getElementById("pin1").style.opacity = e.progress;
  })
  // .addIndicators({ name: "escena 1" }) // add indicators (requires plugin)
  .addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: "#escena2", duration: 200 })
  .on("progress", function (e) {
    document.getElementById("pin2").style.opacity = e.progress;
  })
  .on("enter leave", function (e) {})
  // .addIndicators({ name: "escena 2" }) // add indicators (requires plugin)
  .addTo(controller);
var scene3 = new ScrollMagic.Scene({ triggerElement: "#escena3", duration: 200 })
  .on("progress", function (e) {
    document.getElementById("pin3").style.opacity = e.progress;
  })
  // .addIndicators({ name: "escena 3" }) // add indicators (requires plugin)
  .addTo(controller);
var scene4 = new ScrollMagic.Scene({ triggerElement: "#escena4", duration: 200 })
  .on("progress", function (e) {
    document.getElementById("pin4").style.opacity = e.progress;
  })
  // .addIndicators({ name: "escena 4" }) // add indicators (requires plugin)
  .addTo(controller);
var scene5 = new ScrollMagic.Scene({ triggerElement: "#escena5", duration: 200 })
  .on("progress", function (e) {
    document.getElementById("pin5").style.opacity = e.progress;
  })
  // .addIndicators({ name: "escena 5" }) // add indicators (requires plugin)
  .addTo(controller);
