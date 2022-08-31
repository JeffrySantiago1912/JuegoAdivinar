//Recuperamos el valor de la etiqueta P
let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

//Generamos un numero random entre 1 y 100
let numeroRandom = Math.floor(Math.random()*10) + 1; 

//Mostrara los intentos
let intentos = 0;

//Se alojaran los intentos
let numeros_intentados = [];

function play(){

     //Recuperamos 
    let usuario_intento = document.getElementById("guess").value;

    if(usuario_intento < 1 || usuario_intento > 10){
        alert("Favor de ingresar un numero entre el 1 y 10.");
    }

    else{
        numeros_intentados.push(usuario_intento);
        intentos += 1;

        if(usuario_intento < numeroRandom || usuario_intento > numeroRandom){
            msg1.textContent = "El numero secreto incorrecto";
            msg2.textContent = "Intentos realizados: " + " " + intentos;
            msg3.textContent = "Numeros que has intentado" + " " + numeros_intentados;
         
        }
       
        else if(usuario_intento == numeroRandom){
            msg1.textContent = "Felicidades, descubriste el numero secreto.";
            msg2.textContent = "El numero secreto era: "+ numeroRandom;
            msg3.textContent = "Lo adivinaste en :"+ intentos; + " intentos";
            document.getElementById("my_btn").disabled = true;
        }
    }
}