function error() {
    function nameError() {
        let ele = document.getElementById("t1");
        console.log(ele.checkValidity());

        if (ele.checkValidity()) {
            document.getElementById("d1").innerText = ele.value;
        } else {
            document.getElementById("d1").innerText = ele.validationMessage;
        }
    }

    function ageError() {
        let ele = document.getElementById("a1");
        console.log(ele.checkValidity());

        if (ele.checkValidity()) {
            document.getElementById("d2").innerText = ele.value;
        } else {
            document.getElementById("d2").innerText = ele.validationMessage;
        }
    }

    nameError();
    ageError();
}
