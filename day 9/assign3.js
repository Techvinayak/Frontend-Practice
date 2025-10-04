// process.argv[2] = "5";
function factorial(callback) {
    console.log("Factorial is:", process.argv);
    let num = process.argv[2];
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        console.log(fact *= i);
    }
};
factorial();