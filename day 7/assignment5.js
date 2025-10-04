function runCode() {
    let output = document.getElementById("output");

    try {
        let num1 = parseFloat(document.getElementById("n1").value);
        let num2 = parseFloat(document.getElementById("n2").value);

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Please enter valid numbers.");
        }

        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        let result = num1 / num2;
        output.innerText = "Result: " + result;
    } catch (err) {
        output.innerText = "Caught Error: " + err.message;
    } finally {
        console.log("This block is always running.");
    }
}
