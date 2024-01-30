// Función para cifrar un mensaje
function cifrarMensaje(mensaje) {
  mensaje = mensaje.replace(/e/g, "enter");
  mensaje = mensaje.replace(/i/g, "imes");
  mensaje = mensaje.replace(/a/g, "ai");
  mensaje = mensaje.replace(/o/g, "ober");
  mensaje = mensaje.replace(/u/g, "ufat");
  return mensaje;
}

// Función para descifrar un mensaje cifrado
function descifrarMensaje(mensajeCifrado) {
  mensajeCifrado = mensajeCifrado.replace(/imes/g, "i");
  mensajeCifrado = mensajeCifrado.replace(/ai/g, "a");
  mensajeCifrado = mensajeCifrado.replace(/enter/g, "e");
  mensajeCifrado = mensajeCifrado.replace(/ober/g, "o");
  mensajeCifrado = mensajeCifrado.replace(/ufat/g, "u");
  return mensajeCifrado;
}

// Función para cifrar el mensaje de entrada
function cifrar() {
  let mensaje = document.getElementById("input").value;
  let mensajeCifrado = cifrarMensaje(mensaje);
  document.getElementById("output").value = mensajeCifrado;
}

// Función para descifrar el mensaje cifrado de entrada
function descifrar() {
  let mensajeCifrado = document.getElementById("input").value;
  let mensaje = descifrarMensaje(mensajeCifrado);
  document.getElementById("output").value = mensaje;
}

// Función para copiar el mensaje
function copiar() {
  // Seleccionar el texto que deseamos copiar
  let texto = document.getElementById("output").value;

  // Crear un elemento de texto temporal
  let inputTemp = document.createElement("textarea");

  // Asignar el texto que queremos copiar al elemento temporal
  inputTemp.value = texto;

  // Agregar el elemento temporal al DOM
  document.body.appendChild(inputTemp);

  // Seleccionar el texto en el elemento temporal
  inputTemp.select();
  inputTemp.setSelectionRange(0, 99999); /* Para dispositivos móviles */

  // Copiar el texto seleccionado al portapapeles
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(inputTemp);

  // Alerta de copia exitosa
  alert("Texto copiado al portapapeles: " + texto);
}

// Obtener el elemento textarea
let textarea = document.getElementById("input");
// Agregar un event listener para el evento keydown
textarea.addEventListener("input", function (event) {
  // Obtener el código de la tecla presionada
  let key = textarea.value;
  // Permitir caracteres alfabéticos, numéricos y algunos caracteres especiales como el espacio, el guión y el punto
  let permitidos = /^[a-zA-Z0-9\s\-.]*$/;
  // Verificar si la tecla presionada está permitida
  if (!permitidos.test(key)) {
    // Si la tecla no está permitida, prevenir la acción por defecto (no agregar el carácter al textarea)
    textarea.value = key.replace(/[^\w\s\-.]/gi, "");
  }
});
// Agregar un listener para el evento input (cuando el usuario escribe algo) lo vuelva minusculas
textarea.addEventListener("input", function () {
  // Obtener el texto actual del textarea
  let texto = textarea.value;
  // Convertir todo el texto a minúsculas
  texto = texto.toLowerCase();
  // Actualizar el valor del textarea con el texto en minúsculas
  textarea.value = texto;
});
