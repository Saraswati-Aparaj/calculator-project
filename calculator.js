
const displayVal = document.getElementById('display');
alert(displayVal.value); //empty string

function Display(input) {
    displayVal.value += input;
    console.log(displayVal.value)
}

function removeOneVal(){
displayVal.value=displayVal.value.slice(0,-1); //remove the last element
}

function clearDisplay() {
    displayVal.value="";
    console.log(displayVal.value)
}

function calculate() {
    if (displayVal.value==="Error") {
        displayVal.value = "Error";
        return;
    }
    try {
        displayVal.value=eval(displayVal.value); // Evaluate the mathematical expression
        console.log(displayVal.value)
    } catch (error) {
        displayVal.value="Error";
        console.error(displayVal.value)
    }
}
