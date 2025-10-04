setInterval(myfunction, 1000);
function myfunction() {
    let d = new Date();
    document.getElementById("h1").innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();

    let d1 = new Date();
    document.getElementById("h3").innerHTML =
        d.getDate() + ":" +
        d.getMonth() + ":" +
        d.getFullYear();
}
