

//candtidad de oportunidades
const oportunidades = 6;
let intentos = 0;
let palabraTachada = [];
let letrasFalladas=[];


// Palabra que pido de una api , no se si esta bien
let word;

fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
  .then(response => response.json())
  .then(data => {
  //  console.log(data.body.Word);
    word = data.body.Word;
    if (word.includes("á") || word.includes("é") || word.includes("í") || word.includes("ó") || word.includes("ú")) {
   //   console.log("tiene acento " + word);
      location.reload();
    };
  //  console.log("Desp del if " + word);
    wordOculta();
   
 //   console.log(palabraTachada);
    document.getElementById("palabra").innerHTML = `${(arrayAstring())}`;
    document.getElementById("intentos").innerHTML = `INTENTOS:  ${intentos}`;
 
  });
 alert("Este el Ahorcado Spaguetti Western, presiona solo  letras,tenes 6 intentos,una vez finalizado empieza otra vez.");
//Funcion "ocultar word"    
function wordOculta() {
  for (var z = 0; z < word.length; z++) {
    if (word[z] == " ") {
      palabraTachada.push(" ");
    } else {
      palabraTachada.push("-");
    }
  }
}
//funcion tocar tecla con "input" a lowerCase
function destapar(evento) {
let filtroTelclado=evento.key.toString().toLowerCase();

  // console.log("presion " + evento.key)
 
 let tecla = evento.key.toString().toLowerCase();

 // console.log(typeof (tecla));
 // console.log("variable tecla: " + tecla);
 //si tecla esta en string word
  if (word.includes(tecla)) {
    for (var y = 0; y < word.length; y++) {
      if (word.charAt(y) == tecla) {
        palabraTachada[y] = word.charAt(y);
      }

    }
  //  console.log(palabraTachada);
    document.getElementById("palabra").innerHTML = `${(arrayAstring())}`;
    document.getElementById("intentos").innerHTML =`INTENTOS:  ${intentos}`;
  } else {if(letrasFalladas.includes(tecla)==false){
    intentos++;
    letrasFalladas.push(tecla);
   document.getElementById("letrasFalladas").innerHTML = `LETRAS FALLIDAS : ${letrasFalladas}`;
   document.getElementById("intentos").innerHTML =`INTENTOS:  ${intentos}`;
  }
 //   console.log(intentos);
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

 // console.log(arrayAstring());
  //si pierde
  if (intentos == oportunidades) {
   // alert("perdiste la palabra era : "+word);
    document.getElementById("palabra").innerHTML = `GAME OVER GAME OVER GAME OVER`;
    document.getElementById("intentos").innerHTML =`LA RESPUESTA CORRECTA ERA "${word.toUpperCase()}"`;

    setTimeout(() => {
      document.getElementById("frame").src = "media/gameOver.jpg"; 
    }, 3000);
    setTimeout(() => {
      location.reload();
    }, 6000);
   
    
  };
  //si gana
  if (arrayAstring() == word) {
    
  //  alert("ganaste");
  document.getElementById("palabra").innerHTML = `ACERTASTE "${word.toUpperCase()}", sos todo un cowboy!!`;
  document.getElementById("intentos").innerHTML =`GAME OVER GAME OVER GAME OVER`;

    setTimeout(() => {
      document.getElementById("frame").src = "media/winner.jpg"; 
    }, 2000);
    setTimeout(() => {
      location.reload();
    }, 6000);
   
  };
  
  
}

//funcion pasar array palabraTachada a string resultado
function arrayAstring() {
  let resultado = "";
  for (var g = 0; g < palabraTachada.length; g++) {
    resultado = resultado + palabraTachada[g];

  }
  return resultado
}
if(intentos<6){
  window.addEventListener("keypress", destapar);
}else{ window.addEventListener()};









