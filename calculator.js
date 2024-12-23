
const displayVal = document.getElementById('display');

function Display(input) {
    if (displayVal.value==="Error") {
        displayVal.value='';
    }
    displayVal.value += input;
    console.log(displayVal.value)
}

function removeOneVal(){
displayVal.value=displayVal.value.slice(0,-1);
}

function clearDisplay() {
    displayVal.value="";
    console.log(displayVal.value)
}

function calculate() {
    try {
        displayVal.value=eval(displayVal.value);
        console.log(displayVal.value)
    } catch (error) {
        displayVal.value="Error";
        console.error(displayVal.value)
    }
}
