let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    operator = null;
    firstOperand = null;
}

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput.includes('.') && number === '.') return;

    currentInput = currentInput + number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && firstOperand === null) return;

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    } else if (operator) {
        calculate();
        operator = op;
        currentInput = '';
    }
}

function calculate() {
    if (operator === null || currentInput === '') return;

    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    display.textContent = result;
    firstOperand = result;
    currentInput = '';
    operator = null;
}
