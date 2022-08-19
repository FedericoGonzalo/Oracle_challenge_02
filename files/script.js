
//candtidad de oportunidades
const oportunidades = 6;
let intentos = 0;
let palabraTachada = [];
let letrasFalladas=[];


// Palabra que pido de una api , no se si esta bien
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
                     word.includes("ú")) {location.reload();};
                 wordOculta();
                 document.getElementById("palabra").innerHTML = `${(arrayAstring())}`;
                 document.getElementById("intentos").innerHTML = `INTENTOS:  ${intentos}`;}
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
/*
//filtro qwerty///////////////////////////////////////////////////////////////////////////////////////////////////////
function filtro(evento){
 if(evento.key.toString().toLowerCase().includes("q")||evento.key.toString().toLowerCase().includes("w")||evento.key.toString().toLowerCase().includes("e")||
    evento.key.toString().toLowerCase().includes("r")||evento.key.toString().toLowerCase().includes("t")||evento.key.toString().toLowerCase().includes("y")||
    evento.key.toString().toLowerCase().includes("u")||evento.key.toString().toLowerCase().includes("i")||evento.key.toString().toLowerCase().includes("o")||
    evento.key.toString().toLowerCase().includes("p")||evento.key.toString().toLowerCase().includes("a")||evento.key.toString().toLowerCase().includes("s")||
    evento.key.toString().toLowerCase().includes("d")||evento.key.toString().toLowerCase().includes("f")||evento.key.toString().toLowerCase().includes("g")||
    evento.key.toString().toLowerCase().includes("h")||evento.key.toString().toLowerCase().includes("j")||evento.key.toString().toLowerCase().includes("k")||
    evento.key.toString().toLowerCase().includes("l")||evento.key.toString().toLowerCase().includes("ñ")||evento.key.toString().toLowerCase().includes("z")||
    evento.key.toString().toLowerCase().includes("x")||evento.key.toString().toLowerCase().includes("c")||evento.key.toString().toLowerCase().includes("v")||
    evento.key.toString().toLowerCase().includes("b")||evento.key.toString().toLowerCase().includes("n")||evento.key.toString().toLowerCase().includes("m")){}
   return evento.key.toString().toLowerCase();
  }
*/
//funcion tocar tecla con "input" a lowerCase////////////////////////////////////////////////////////////////////////////////////////////
function destapar(evento) {
  //let tecla = filtro(evento);
  let tecla =evento.key.toString().toLowerCase();
  if (word.includes(tecla)) {
          for (var y = 0; y < word.length; y++) {
                if (word.charAt(y) == tecla) {
                palabraTachada[y] = word.charAt(y);}}
          document.getElementById("palabra").innerHTML = `${(arrayAstring())}`;
          document.getElementById("intentos").innerHTML =`INTENTOS:  ${intentos}`; }
  else{
    if(letrasFalladas.includes(tecla)==false){
    intentos++;
    letrasFalladas.push(tecla);
   document.getElementById("letrasFalladas").innerHTML = `LETRAS FALLIDAS : ${letrasFalladas}`;
   document.getElementById("intentos").innerHTML =`INTENTOS:  ${intentos}`;
  }
 // switch case/////
    switch(intentos){
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
  };

 
 ////
  if (intentos == oportunidades) {  //si pierde//////////////////////////////////////////////////////////////////////////////////////////////
   
    document.getElementById("palabra").innerHTML = `GAME OVER GAME OVER GAME OVER `;
    document.getElementById("intentos").innerHTML =` LA RESPUESTA CORRECTA ERA "${word.toUpperCase()}"`;

    setTimeout(() => {
      document.getElementById("palabra").innerHTML = `GAME OVER GAME LA RESPUESTA CORRECTA ERA "${word.toUpperCase()}"`;
      document.getElementById("intentos").innerHTML =`GAME OVER GAME LA RESPUESTA CORRECTA ERA "${word.toUpperCase()}"`;
    }, 2000);
    setTimeout(() => {
      document.getElementById("frame").src = "media/gameOver.jpg"; 
    }, 3000);

    setTimeout(() => {
      location.reload();
    }, 6000); 
  };
  ////
  if (arrayAstring() == word) {  //si gana////////////////////////////////////////////////////////////////////////////////////////////////////////
  document.getElementById("palabra").innerHTML = `ACERTASTE "${word.toUpperCase()}", sos todo un cowboy!!`;
  document.getElementById("intentos").innerHTML =`GAME OVER GAME OVER GAME OVER`;
    setTimeout(() => {
      document.getElementById("frame").src = "media/winner.jpg"; 
    }, 2000);
    setTimeout(() => {
      document.getElementById("frame").src = "media/dont.jpg"; 
    }, 2500);
    setTimeout(() => {
      location.reload();
    }, 10000);
   
  };
  
  
}

//funcion pasar array palabraTachada a string resultado////////////////////////////////////////////////////////////////////////////////////////////
function arrayAstring() {
  let resultado = "";
  for (var g = 0; g < palabraTachada.length; g++) {
    resultado = resultado + palabraTachada[g];

  }
  return resultado
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  window.addEventListener("keypress", destapar);










