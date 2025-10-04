function addition(n1, n2, show) {
    let result = n1 + n2;
    show(result);
}

function subtraction(n1, n2, show) {
    let result = n1 - n2;
    show(result);
}

function multiplication(n1, n2, show) {
    let result = n1 * n2;
    show(result);
}

function division(n1, n2, show) {
    if (n2 === 0) {
        alert("Cannot divide by 0");
    } else {
        let result = n1 / n2;
        show(result);
    }
}

function operations(n1, n2, operationFunc) {
    operationFunc(n1, n2, display);
}

function display(result) {
    alert("Result: " + result);
}

let num1 = parseFloat(prompt("Enter 1st number"));
let num2 = parseFloat(prompt("Enter 2nd number"));
let operation = prompt("Operations: add, sub, mul, div").toLowerCase();

switch (operation) {
    case "add":
        operations(num1, num2, addition);
        break;
    case "sub":
        operations(num1, num2, subtraction);
        break;
    case "mul":
        operations(num1, num2, multiplication);
        break;
    case "div":
        operations(num1, num2, division);
        break;
    default:
        alert("No valid operation was selected");
}
