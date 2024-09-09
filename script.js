window.onload = function() {
    const display = document.querySelector("#display");

    function add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
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

    let digitButtons = document.querySelectorAll(".digit-button");
    digitButtons.forEach((element) => {
        element.addEventListener('click', () => {
            populateDisplay(element.value)
        });
        console.log(element.value);
    });

    let firstNumber;
    let secondNumber;
    let operator;

    console.log(operate(2,'+',2));

}