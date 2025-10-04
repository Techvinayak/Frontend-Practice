function pattern(a) {
    for (let i = 0; i < a; i++) {
        for (let y = 0; y < a - i; y++) {
            process.stdout.write("*");
        }
        console.log("");
    }
}
console.log("Enter a number: ");
let a = Number(process.argv[2]);
try {
    if (a < 6 && a > 0) {
        pattern(a);
    }
    else {
        throw "Enter a number between 1 to 5";
    }
}
catch (error) {
    console.log(error);
}
finally {
    console.log("Happy ");
}