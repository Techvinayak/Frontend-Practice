setInterval(myfunction, 1000);
function myfunction() {
    let d = new Date();
    document.getElementById("h1").innerHTML =
        "Time is: " +
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}
