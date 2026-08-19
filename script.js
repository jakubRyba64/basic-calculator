"use strict"
const inputDisplay = document.querySelector("#input-container input")

inputDisplay.value = ""
let shouldClearInput = false;

function calcFunc(value){
    if (shouldClearInput) {
        inputDisplay.value = ""; // smaž předchozí výsledek
        shouldClearInput = false;
      }
      inputDisplay.value += value;
}
function calsFuncEqual(){
    try {
        inputDisplay.value = eval(inputDisplay.value)
    } catch {
        inputDisplay.value = "Error"
    }
    shouldClearInput = true;
}

