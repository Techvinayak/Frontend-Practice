$(document).ready(function () {
    $("#showTable").click(function () {
        let num = $("#num").val();
        let from = $("#fromNo").val();
        let to = $("#toNo").val();
        let table = $("#table").empty();

        if (num && from && to) {
            for (let i = from; i <= to; i++) {
                table.append("<tr><td>" + num + " * " + i + " = " + (num * i) + "</td></tr>");
            }
        } else {
            alert("Please fill all fields");
        }
    });
});