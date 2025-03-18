function insert (value) {
    document.getElementById("display").value += value;
}

function clearDisplay () {
    document.getElementById("display").value = "";
}

function backspace () {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}// Removes the last character from the value of an input element with the ID "display".

function calculate () {
    let display = document.getElementById("display");
    try {
        let result = math.evaluate(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function insertFactorial () {
    let display = document.getElementById("display");
    let value = display.value;
    if (value) {
        let result = factorial(parseInt(value));
        display.value = result;
    }
}