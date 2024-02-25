function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
function appendToDisplay(value) {
    var display = document.getElementById('display');
    var lastChar = display.value[display.value.length - 1];

    // Check if the last character is an operator and the new value is also an operator
    if (isOperator(lastChar) && isOperator(value)) {
        return; // Do nothing if both are operators
    }

    display.value += value;
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
