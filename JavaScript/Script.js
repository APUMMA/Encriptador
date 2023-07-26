const textArea = document.querySelector(".txt-area-1");
const mensaje = document.querySelector(".txt-area-2");
const btnCopy = document.querySelector(".btn-copy");

/* Las "llaves" de encriptación que utilizaremos son las siguientes:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

// 
function btnEncrypt() {
  const txtEncrypted = encrypt(textArea.value);
  mensaje.value = txtEncrypted
  textArea.value = ""; // Limpia el textArea después de encriptar.
  mensaje.style.backgroundImage = "none"; // Oculta la imagen del área de mensaje.
  ocultar();
  btnCopy.style.display = "block";
}

// Declaración función encrypt que realizará el cambio a las llaves usando una matríz o array.
function encrypt(stringEncrypted) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncrypted = stringEncrypted.toLowerCase();

  // Recorrido de la matríz y reemplazo por la llaves.
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncrypted.includes(matrizCodigo[i][0])) {
      stringEncrypted = stringEncrypted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

  }
  return stringEncrypted;
}

function btnDecrypt() {
  const txtEncrypted = decrypt(textArea.value);
  mensaje.value = txtEncrypted
  textArea.value = ""; // Limpia el textArea después de encriptar.
  mensaje.style.backgroundImage = "none"; // Oculta la imagen del área de mensaje.
}

// Declaración función decrypt que realizará el cambio a las llaves usando una matríz o array.
function decrypt(stringDecrypted) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDecrypted = stringDecrypted.toLowerCase();

  // Recorrido de la matríz y reemplazo por la llaves.
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDecrypted.includes(matrizCodigo[i][1])) {
      stringDecrypted = stringDecrypted.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

  }
  return stringDecrypted;
}

function copy() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = ""
  // alert("El texto se ha copiado");
}

function ocultar() {
  document.getElementById("textos").style.display = 'none';
}
