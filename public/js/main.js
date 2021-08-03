document.addEventListener("DOMContentLoaded", () => {
  const imgLightBox = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(imgLightBox, {
    inDuration: 500,
    outDuration: 500,
  });
});
