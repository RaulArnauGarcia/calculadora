let botonesMid = document.querySelector(".botones_numeros");
let pantallaNumeros = document.querySelector(".pantalla");
let arrayNumeros = [];
const buttOn = document.querySelector(".Numero1");
localStorage.clear();
pantallaNumeros.value = "";
let MarchaOn = false;

buttOn.addEventListener("click", async function (event) {
  if (MarchaOn) {
    pantallaNumeros.value = [];
    arrayNumeros = [];
    localStorage.removeItem("resultado");
    location.reload();
  } else {
    botonesMid.addEventListener("click", function (event) {
      const numLocal = localStorage.getItem("resultado");
      if (!numLocal) {
        let botonPresionado = event.target;
        let resultado = botonPresionado.value;
        arrayNumeros.push(resultado);
        let cadenaNumeros = arrayNumeros.join("");
        pantallaNumeros.value = cadenaNumeros;
      } else {
        const botonPress = localStorage.getItem("resultado");
        const newValor = [];
        for (let i = 0; i < botonPress.length; i++) {
          newValor.push(botonPress[i]);
        }
        let botonPresionado = event.target;
        let resultado = botonPresionado.value;
        newValor.push(resultado);
        arrayNumeros = newValor;
        pantallaNumeros.value = newValor.join("");
        localStorage.setItem("resultado", newValor.join(""));
      }
    });

    let botonEliminar = document.querySelector(".Numero3");
    botonEliminar.addEventListener("click", function (event) {
      pantallaNumeros.value = [];
      arrayNumeros = [];
      localStorage.removeItem("resultado");
    });

    let signosLaterales = document.querySelector(".botones_signos");
    signosLaterales.addEventListener("click", function (event) {
      const numLocal = localStorage.getItem("resultado");
      if (!numLocal) {
        let signoPresionado = event.target;
        arrayNumeros.push(signoPresionado.value);
        let cadenaSignos = arrayNumeros.join("");
        pantallaNumeros.value = cadenaSignos;
      } else {
        const signPress = localStorage.getItem("resultado");
        const arraySing = [];
        for (let i = 0; i < signPress.length; i++) {
          arraySing.push(signPress[i]);
        }
        let valuePressed = event.target;
        let infoSign = valuePressed.value;
        arraySing.push(infoSign);
        arrayNumeros = arraySing;
        pantallaNumeros.value = arraySing.join("");
        localStorage.setItem("resultado", arraySing.join(""));
      }
    });

    // --------------------------------------------------------

    let signoIgual = document.querySelector(".teclaIgual");
    signoIgual.addEventListener("click", function (event) {
      if (arrayNumeros.length === 0) {
        let mensajeError = "Introduzca numeros";
        pantallaNumeros.value = mensajeError;
      } else {
        let hacerOperacion = arrayNumeros.join("");
        console.log(hacerOperacion);
        const calcular = new Function("return " + hacerOperacion);
        const resultadoNumero = calcular();
        console.log(resultadoNumero);
        // arrayNumeros = [];
        pantallaNumeros.value = resultadoNumero;
        arrayNumeros = [];
        arrayNumeros.push([resultadoNumero]);
        localStorage.setItem("resultado", resultadoNumero);
      }
    });

    // --------------------------------------------------------

    let botonDelete = document.querySelector(".Numero4");
    botonDelete.addEventListener("click", function (event) {
      const infoLocal = localStorage.getItem("resultado");
      if (!infoLocal) {
        arrayNumeros.pop();
        const sincomas = arrayNumeros.join("");
        pantallaNumeros.value = sincomas;
      } else {
        console.log("toy aqui");
        const valorAnterior = localStorage.getItem("resultado");
        const valorNuevo = [];
        for (let i = 0; i < valorAnterior.length; i++) {
          valorNuevo.push(valorAnterior[i]);
        }
        valorNuevo.pop();
        localStorage.setItem("resultado", valorNuevo.join(""));
        console.log("aqui me quede");
        console.log(infoLocal);
        if (valorNuevo.length == []) {
          console.log("toyyy");
          localStorage.removeItem("resultado");
          pantallaNumeros.value = "";
          arrayNumeros = [];
        }
        pantallaNumeros.value = valorNuevo.join("");
      }
    });
    console.log("Encendida");
  }
  MarchaOn = !MarchaOn;
});
