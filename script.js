let currentNumber = '0';
let previousNumber = '';
let operator = '';
let shouldReset = false;

const display = document.getElementById('display');
const expression = document.getElementById('expression');

function updateDisplay() {
    display.textContent = currentNumber;

    // shrink text if number gets long
    if (currentNumber.length > 9) {
        display.style.fontSize = '40px';
    } else if (currentNumber.length > 6) {
        display.style.fontSize = '56px';
    } else {
        display.style.fontSize = '72px';
    }

    // swap AC to C when there's something to clear
    const clearBtn = document.querySelector('.function');
    if (currentNumber !== '0' || previousNumber !== '') {
        clearBtn.textContent = 'C';
    } else {
        clearBtn.textContent = 'AC';
    }
}

function inputDigit(digit) {
    if (shouldReset) {
        currentNumber = digit;
        shouldReset = false;
    } else {
        if (currentNumber === '0') {
            currentNumber = digit;
        } else {
            if (currentNumber.length < 12) {
                currentNumber += digit;
            }
        }
    }
    updateDisplay();
}

function inputDecimal() {
    if (shouldReset) {
        currentNumber = '0.';
        shouldReset = false;
        updateDisplay();
        return;
    }
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
    updateDisplay();
}

function setOperator(op) {
    // if there's already a pending operation, calculate it first
    if (operator !== '' && !shouldReset) {
        calculate();
    }

    previousNumber = currentNumber;
    operator = op;
    shouldReset = true;

    expression.textContent = previousNumber + ' ' + operator;

    // highlight the active operator button
    document.querySelectorAll('.btn.operator').forEach(function(btn) {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    updateDisplay();
}

function calculate() {
    if (operator === '' || previousNumber === '') return;

    let a = parseFloat(previousNumber);
    let b = parseFloat(currentNumber);
    let result = 0;

    if (operator === '+') result = a + b;
    if (operator === '−') result = a - b;
    if (operator === '×') result = a * b;
    if (operator === '÷') {
        if (b === 0) {
            currentNumber = 'Error';
            operator = '';
            previousNumber = '';
            updateDisplay();
            return;
        }
        result = a / b;
    }

    expression.textContent = previousNumber + ' ' + operator + ' ' + currentNumber + ' =';

    // fix floating point weirdness like 0.1 + 0.2 = 0.30000000004
    result = parseFloat(result.toPrecision(10));
    currentNumber = String(result);

    operator = '';
    previousNumber = '';
    shouldReset = true;

    // remove operator highlight
    document.querySelectorAll('.btn.operator').forEach(function(btn) {
        btn.classList.remove('active');
    });

    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operator = '';
    shouldReset = false;
    expression.textContent = '';

    document.querySelectorAll('.btn.operator').forEach(function(btn) {
        btn.classList.remove('active');
    });

    updateDisplay();
}

function toggleSign() {
    if (currentNumber === '0') return;
    if (currentNumber.startsWith('-')) {
        currentNumber = currentNumber.slice(1);
    } else {
        currentNumber = '-' + currentNumber;
    }
    updateDisplay();
}

function percentage() {
    currentNumber = String(parseFloat(currentNumber) / 100);
    updateDisplay();
}