$(document).ready(function () {
    $("#b1").click(function () {
        let data = $("#ta1").val();
        let l = data.length;
        let c = Math.floor(l / 2);

        let d = "";
        d = d + "<br/>" + data.slice(c + 1, l);

        $("#d1").append(d);
    });
});
