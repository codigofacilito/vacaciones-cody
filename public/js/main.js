document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
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
var scene = new ScrollMagic.Scene({ triggerElement: "#escena1", duration: 400 })
  .offset(0)
  .on("progress", function (e) {
    console.log(e.progress);
  })
  .addIndicators({ name: "escena 1" }) // add indicators (requires plugin)
  .addTo(controller);
