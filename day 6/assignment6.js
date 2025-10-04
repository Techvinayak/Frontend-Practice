$(document).ready(function () {
    const offerText = "Special Offer Available!";
    const noOfferText = "No Offer";

    $("#b1").click(function () {
        $("#d1").fadeOut(function () {
            $("#d1").text(offerText).css("visibility", "visible");
        });
    });

    $("#b2").click(function () {
        $("#d1").fadeIn(function () {
            $("#d1").text(offerText).css("visibility", "visible");
        });
    });

    $("#b3").click(function () {
        $("#d1").fadeToggle(function () {
            $("#d1").text(offerText).css("visibility", "visible");
        });
    });

    $("#b4").click(function () {
        $("#d1").fadeToggle(function () {
            $("#d1").text(offerText).css({
                "background-color": "#A8FBD3",
                "visibility": "visible"
            });
        });
    });

    $("#b5").click(function () {
        $("#d1").fadeToggle(function () {
            $("#d1").text(noOfferText).css({
                "background-color": "#19183B",
                "visibility": "visible"
            });
        });
    });
});
