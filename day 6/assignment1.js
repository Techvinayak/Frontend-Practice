$(document).ready(function () {
    $("#b1").click(function () {
        let text = $("#t1").val();
        $("#output").text(text).css("font-style", "italic");
    });

    $("#b2").click(function () {
        let text = $("#t1").val();
        $("#output").text(text).css("text-decoration", "underline");
    });
}); 
