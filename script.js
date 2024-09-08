(function(document, window, undefined) {

    "use strict"

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
                add(firstNumber, secondNumber);
                break;
            case '-':
                subtract(firstNumber, secondNumber);
                break;
            case '*':
                multiply(firstNumber, secondNumber);
                break;
            case '/':
                divide(firstNumber, secondNumber);
                break;
            default:
                alert("Invalid value");
        }
    }

    let firstNumber;
    let secondNumber;
    let operator;

})(document, window)