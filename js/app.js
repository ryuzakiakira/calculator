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

// variables to store the input

let value1;
let operationalOperator; 
let value2;

//performs whichever operation is suited    

function operate(a, operator, b) {
    value1 = a;
    operationalOperator = operator;
    value2 = b;
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

// update screen

function updateScreen(e) {
    const onScreen = e.target.id;
    const screen = document.querySelector('.screen-text')
    screen.textContent = onScreen;
};

const keys = document.getElementById('calculator-keys')
keys.addEventListener('click', (event => {
    updateScreen(event);
}));