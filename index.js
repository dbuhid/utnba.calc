//PARA AGREGAR FUNCIONES
// AGREGAR EL BOTÓN EN EL FRONTEND, DEFINIENDO ID Y VALUE "UNICOS"
// AGREGAR EL BOTÓN EN LAS DEFINICIONES DE "BOTONES DE OPERACION"
// AGREGAR EL LISTENER EN LA LISTA DE "LISTENERS DE BOTONES DE OPERACION"

'use strict';
let ope = "";
var resultado = null;

const valor1 = document.getElementById('valor_1');
const valor2 = document.getElementById('valor_2');
const resul = document.getElementById('valor_3');

//DEFINICION DE BOTONES DE OPERACION - Definir Aqui botones de nuevas funciones
const pote = document.getElementById('pote');
const suma = document.getElementById('suma');
const rest = document.getElementById('rest');
const mult = document.getElementById('mult');
const divi = document.getElementById('divi');
const igual = document.getElementById('igual');

const err =  document.getElementById('err');

//listeners
valor1.addEventListener('blur', function(){

    if (isNaN(valor1.value)){
        console.log("Valor 1: Ingrese un valor numérico")
        err.innerText = "Valor 1: Ingrese un valor numérico";
        valor1.focus();
        valor1.scrollIntoView();
    } else {
        valor1.value = valor1.value * 1;
        err.innerText = "";
    }
});

valor2.addEventListener('blur', function(){
    if (isNaN(valor2.value)){
        console.log("Valor 2: Ingrese un valor numérico")
        err.innerText = "Valor 2: Ingrese un valor numérico";
        valor2.focus();
        valor2.select();
    } else {
        err.innerText = "";
        valor2.value = valor2.value * 1;
    }
});

//FUNCION PARA REVISAR VALORES, PREVIO A LOS CALCULOS
function chk_vals(valor=3){

    if (valor == 1){ //valor 1
        if (!isNaN(valor1.value) && (valor1.value.length > 0)) {
            return true;
        } else {
            return false;
        }
    }

    if (valor == 2){  //valor 2
        if ( !isNaN(valor2.value) && valor2.value.length > 0){
            return true;
        } else {
            return false;
        }
    }
    if (valor == 3) { // ambos valores
        if ( !isNaN(valor1.value) && !isNaN(valor2.value) && valor1.value.length > 0 && valor2.value.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    if (valor == 4) { // ambos valores y operación
        if ( !isNaN(valor1.value) && !isNaN(valor2.value) && valor1.value.length > 0 && valor2.value.length > 0 && ope.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}


// INICIO LISTENERS DE BOTONES DE OPERACION - Agregar aqui listeners de nuevas funciones

pote.addEventListener('click', function() {
    if (chk_vals(1)){
        ope = "**";
        valor2.focus();
    }
});

suma.addEventListener('click', function() {
    if (chk_vals(1)){
        ope = "+";
        valor2.focus();
    }
});
rest.addEventListener('click', function() {
    if (chk_vals(1)){
        ope = "-";
        valor2.focus();
    }
});
mult.addEventListener('click', function() {
    if (chk_vals(1)){
        ope = "*";
        valor2.focus();
    }
});
divi.addEventListener('click', function() {
    if (chk_vals(1)){
        ope = "/";
        valor2.focus();
    }
});
// FIN LISTENERS DE BOTONES DE OPERACION


// INICIO BOTON "IGUAL"
igual.addEventListener('click', function() {
    if (chk_vals(4)){
        //alert("ok1");
        resultado = calc();
        resul.value=resultado;
        //ope = "";
    } else {
        //alert("error");
        //console.log("Resultado: ERROR")
        err.innerHTML = "Resultado: ERROR";
        resul.value="ERROR";
    }
});
// FIN BOTON "IGUAL"



// INICIO DE FUNCION DE CALCULO - Agregar aqui nuevas operaciones con validaciones de excepciones
function calc(){
    let nresul = null;
    switch (ope){
        case "**":
            nresul = (valor1.value * 1) ** (valor2.value * 1);
            break;
        case "+":
            nresul = (valor1.value * 1) + (valor2.value * 1);
            break;
        case "-":
            nresul = (valor1.value * 1) - (valor2.value * 1);
            break;
        case "*":
            nresul = (valor1.value) * (valor2.value * 1);
            break;
        case "/":
            if ( ((valor2.value * 1) != 0) ) {
                nresul = (valor1.value * 1) / (valor2.value * 1);
            } else {
                nresul = "∄ Error";
            }
            break;

        default:
            nresul =  "ERRRR";
            break;
    }
    return nresul;
}
