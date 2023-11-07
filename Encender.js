const pantalla = document.querySelector("#pantalla");
const botonMarcha = document.querySelector("#marcha");

let isOn = false;

botonMarcha.addEventListener("click", function () {
  if (isOn) {
    pantalla.classList.add("off");
    pantalla.classList.remove("on");
  } else {
    pantalla.classList.remove("off");
    pantalla.classList.add("on");
  }
  isOn = !isOn;
});
