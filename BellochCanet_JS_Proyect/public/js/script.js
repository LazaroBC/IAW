// Calculadora Básica
// Definición Variables globales
var inputA = document.getElementById("inputA");
var inputB = document.getElementById("inputB");
var addButton = document.getElementById("botonSuma");
var subtractButton = document.getElementById("botonResta");
var multiplyButton = document.getElementById("botonMultiplicar");
var divideButton = document.getElementById("botonDividir");
var result = document.getElementById("resultado");

// Función Sumar
function add() {
    var num1 = Number(inputA.value);
    var num2 = Number(inputB.value);
    result.innerHTML = num1 + num2;
}

// Función Restar
function subtract() {
    var num1 = Number(inputA.value);
    var num2 = Number(inputB.value);
    result.textContent = num1 - num2;
}

// Función multiplicar
function multiply() {
    var num1 = Number(inputA.value);
    var num2 = Number(inputB.value);
    result.textContent = num1 * num2;
}

// Función Dividir
function divide() {
    var num1 = Number(inputA.value);
    var num2 = Number(inputB.value);
    if (num2 !== 0) {
        result.textContent = num1 / num2;
    } else {
        result.textContent = "No se puede dividir por cero";
    }
}

// Mostrar resultados
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);

// Calculadora avanzada
// Ecuchamos el evento click y lo ejecutamos en una función anónima
document.getElementById("botonCalcAvanzada").addEventListener("click", function () {

    // Almacenamos en la variable input la expresión mátematica a calcular
    var input = document.getElementById("inputAvanzado").value;
    // Almacena en la variable result el resultado de la operación 
    var result = document.getElementById("ResultadoAvanzado");

    // Intentamos evaluar la expresión matemática ingresada por el usuario
    try {
        var output = eval(input);
        // Verificamos si el resultado es un número
        if (isNaN(output)) {
            // Si el resultado no es un número, mostramos un mensaje de error
            result.textContent = "Error: Revisa la expresión a calcular";
        } else {
            // Si el resultado es un número, lo mostramos con dos decimales
            result.textContent = output.toFixed(2);
        }
    } catch (error) {
        // Si ocurre un error durante la evaluación de la expresión, mostramos un mensaje de error
        result.textContent = "Error: Revisa la expresión a calcular";
    }
});


