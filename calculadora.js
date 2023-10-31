//Variables
//var -- una variable que puede tomar otro valor
//let --una variable que puede tomar otro valor. solo que es mas moderno y mas usado
//const -- constante --siempre tiene el mismo valor
//camelcase -- que significa que la primera letra de la palabra va en mayuscula
// si en Js es && y no ||

const Numero1 = document.getElementById("operador1")
const Operador = document.getElementById("operacion")
const Numero2 = document.getElementById("operador2")
const Boton = document.getElementById("btn")
const parrafoResulatdo = document.getElementById("pResultado")

Boton.addEventListener("click", calcular)



function calcular (){
    const operando = Operador.value;
    const num1  =parseFloat(Numero1.value);
    const num2  =parseFloat(Numero2.value);
    

    if( operando =="+" || operando =="-" || operando =="*" || operando =="/"){
        let resultado;
        switch (operando){
            case "+": resultado = num1+num2;
                break;
            case "-": resultado = num1-num2;
                break;
            case "*": resultado = num1*num2;
                break;
            case "/": resultado = num1/num2;
                break;
        
    
        }
        console.log(resultado)
        parrafoResulatdo.innerText = " el resultado es =" + resultado
       
    } else{
        console.log ("no va a funcionar")
        parrafoResulatdo.innerText = "sintaxis invalida"
     }
    console.log("diste click en el boton")
  
}