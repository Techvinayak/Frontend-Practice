function clickfunction() {

    let ele = document.getElementById("t1");

    console.log(ele.checkValidity())

    if (ele.checkValidity()) {
        document.getElementById("d1").innerText =
            document.getElementById("t1").value;
    } else {
        document.getElementById("d1").innerText =
            ele.validationMessage
    }
}
