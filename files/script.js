//candtidad de oportunidades
const oportunidades = 6;
let intentos = 0;
let palabraTachada = [];
let letrasFalladas = [];
const regEx = /[a-z]/;
// Palabra que pido de una api 
let word;
//de donde carga la palabra//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
  .then(response => response.json())
  .then(data => {
    word = data.body.Word;
    if (word.includes("á") ||
      word.includes("é") ||
      word.includes("í") ||
      word.includes("ó") ||
      word.includes("ú")) { location.reload(); };
    wordOculta();
    document.getElementById("palabra").innerHTML = `${(arrayAstring())}`;
    document.getElementById("intentos").innerHTML = `INTENTOS:  ${intentos}`;
  }
  );
//alerta con aviso---///////////////////////////////////////////
alert("Este el Ahorcado Spaguetti Western, presiona solo  letras,tenes 6 intentos,una vez finalizado empieza otra vez.");
//Funcion "ocultar word"////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
function wordOculta() {
  for (var z = 0; z < word.length; z++) {
    if (word[z] == " ") {
      palabraTachada.push(" ");
    } else {
      palabraTachada.push("-");
    }
  }
}
// funcion tocar tecla con "input" a lowerCase////////////////////////////////////////////////////////////////////////////////////////////
function destapar(evento) {
  let tecla;
  let tecla2 = evento.key.toString().toLowerCase();
// *******para que  tecla2 este en regEx y que tenga un largo de uno asi evito numeros y entreadas tipo enter
  if (regEx.test(tecla2) && tecla2.length < 2) {    tecla = tecla2; console.log(tecla); } 
//*****busqueda de tecla en  str word
  if (word.includes(tecla)) {
    for (var y = 0; y < word.length; y++) {
      if (word.charAt(y) == tecla) {
        palabraTachada[y] = word.charAt(y);
      }
    }
    document.getElementById("palabra").innerHTML = `${(arrayAstring())}`;
    document.getElementById("intentos").innerHTML = `INTENTOS:  ${intentos}`;
  }
  else {
    if (letrasFalladas.includes(tecla) == false && intentos < oportunidades) {
      if (regEx.test(tecla[0])) {
        intentos++;
        letrasFalladas.push(tecla);
      }
      document.getElementById("letrasFalladas").innerHTML = `LETRAS FALLIDAS : ${letrasFalladas}`;
      document.getElementById("intentos").innerHTML = `INTENTOS:  ${intentos}`;
    }
  };
// *******switch case*********
  switch (intentos) {
    case 0:
      document.getElementById("frame").src = "media/0.jpg";
      break;
    case 1:
      document.getElementById("frame").src = "media/1.jpg";
      break;
    case 2:
      document.getElementById("frame").src = "media/2.jpg";
      break;
    case 3:
      document.getElementById("frame").src = "media/3.jpg";
      break;
    case 4:
      document.getElementById("frame").src = "media/4.jpg";
      break;
    case 5:
      document.getElementById("frame").src = "media/5.jpg";
      break;
    case 6:
      document.getElementById("frame").src = "media/6.jpg";
      break;
  }
//****si pierde*****
  if (intentos >= oportunidades) {  
    document.getElementById("palabra").innerHTML = `GAME OVER GAME OVER GAME OVER `;
    document.getElementById("intentos").innerHTML = ` LA RESPUESTA CORRECTA ERA "${word.toUpperCase()}"`;
    setTimeout(() => {  document.getElementById("frame").src = "media/gameOver.jpg";}, 2000);
    setTimeout(() => { location.reload(); }, 6000);
  };
//************si gana**********
  if (arrayAstring() == word && intentos <= oportunidades) { 
    document.getElementById("palabra").innerHTML = `ACERTASTE "${word.toUpperCase()}", sos todo un cowboy!!`;
    document.getElementById("intentos").innerHTML = `GAME OVER GAME OVER GAME OVER`;
    setTimeout(() => { document.getElementById("frame").src = "media/winner.jpg";}, 1000);
    setTimeout(() => { location.reload();}, 10000);
  };


}

//****funcion pasar array palabraTachada a string resultado***************
function arrayAstring() {
  let resultado = "";
  for (var g = 0; g < palabraTachada.length; g++) {
    resultado = resultado + palabraTachada[g];

  }
  return resultado
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("keypress", destapar);










