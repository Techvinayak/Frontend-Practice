function getFactorialImpl(choice = "FORLOOP") {
    function Fact1(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        console.log("Factorial of ", n, " using FORLOOP is:", result);
        return result;
    }


    function Fact2(n) {
        if (n <= 1) return 1;
        return n * Fact2(n - 1);
    }

    if (choice === "RECUR") {
        return function (n) {
            const result = Fact2(n);
            console.log("Factorial of", n, "using RECUR is:", result);
            return result;
        };
    }
    else {
        return Fact1;
    }
}

let userChoice = parseInt(prompt("Enter 'RECUR' for recursion or 'FORLOOP' for loop:"));
let factorialFunc = getFactorialImpl(userChoice);
factorialFunc(6);

// let rv = getFactorialImpl("RECUR");
// rv(6);
// rv = getFactorialImpl();
// rv(6); 