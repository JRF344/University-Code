'use strict';

let nombre = 'Josh';
const PI = Math.PI;

nombre = "Adrian";

console.log(nombre);
console.log("Su nombre es", nombre);
console.log("Su nombre es " + nombre);
//String template
console.log(`Su nombre es ${nombre}`); //back ticks ``

const sumar = (num1, num2) => {
    return num1 + num2;
}

/* function sumar(num1, num2) {
    return num1 + num2;
} */

let resultado = sumar(9, 13);
console.log(resultado);

const calcularIMC = (peso, estatura) => {
    let BMI = peso / (Math.pow(estatura, 2));
    return BMI.toFixed(2);
}

/* const calcularIMC = (peso, estatura) => (peso / (Math.pow(estatura, 2))).toFixed(2); */

console.log("IMC: " + calcularIMC(65, 1.74));

const calcularPrecioIva = (precio) => precio * 1.13;

console.log(calcularPrecioIva(1000));

const inputCorreo = document.querySelector('#txt-correo');
console.log(inputCorreo);