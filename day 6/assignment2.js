$(document).ready(function () {


    $("#factorialInput").on("input", function () {

        let num = parseInt($(this).val());
        if (num >= 0) {
            let factorial = 1;
            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }
            $("#factorialResult").text("Factorial: " + factorial);
        } else {
            $("#factorialResult").text("Please enter a non-negative number.");
        }
    });
});