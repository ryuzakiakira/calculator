// calculator functions

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

//performs whichever operation is suited    

function operate(a, operator, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    };
};

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.screen');
    display.value = calculator.displayValue;
}

updateDisplay()

const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
    const {target} = event;
    if (!target.matches('button')) return;
    if(target.classList.contains('operator')) {
        console.log(target.value)
        return
    };

    if(target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay()
        return
    };

    if (target.classList.contains('all-clear')) {
        console.log(target.value)
        return
    };

    inputDigit(target.value);
    updateDisplay();
});


function inputDigit(digit) {
    const {displayValue} = calculator
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
};

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    };
};