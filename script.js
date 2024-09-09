window.onload = function() {
    const display = document.querySelector("#display");
    const digitButtons = document.querySelectorAll(".digit-button");
    const addButton = document.querySelector(".add-button");
    const subtractButton = document.querySelector(".subtract-button");
    const multiplyButton = document.querySelector(".multiply-button");
    const divideButton = document.querySelector(".divide-button");
    const equalsButton = document.querySelector(".equals-button");
    const clearButton = document.querySelector(".clear-button");
    let firstNumber;
    let operator;
    let secondNumber;

    function add(firstNumber, secondNumber) {
        return parseInt(firstNumber) + parseInt(secondNumber);
    }

    function subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    function multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }

    function divide(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }

    function operate(firstNumber, operate, secondNumber) {
        switch (operate) {
            case '+':
                return add(firstNumber, secondNumber);
            case '-':
                return subtract(firstNumber, secondNumber);
            case '*':
                return multiply(firstNumber, secondNumber);
            case '/':
                return divide(firstNumber, secondNumber);
            default:
                alert("Invalid value");
        }
    }

    function populateDisplay(value) {
        display.value += value;
    }

    function saveDisplayValue() {
        let number = display.value;
        display.value = '';
        return number;
    }

    digitButtons.forEach((element) => {
        element.addEventListener('click', () => {
            populateDisplay(element.value);
        });
    });

    addButton.addEventListener('click', () => {
        firstNumber = saveDisplayValue();
        operator = '+';
    });

    subtractButton.addEventListener('click', () => {
        firstNumber = saveDisplayValue();
        operator = '-';
    });
    
    multiplyButton.addEventListener('click', () => {
        firstNumber = saveDisplayValue();
        operator = '*';
    });

    divideButton.addEventListener('click', () => {
        firstNumber = saveDisplayValue();
        operator = '/';
    });

    equalsButton.addEventListener('click', () => {
        secondNumber = saveDisplayValue();
        display.value = operate(firstNumber, operator, secondNumber);
    });

    clearButton.addEventListener('click', () => {
        display.value = '';
    });
}