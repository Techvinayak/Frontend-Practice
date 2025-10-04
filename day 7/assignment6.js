function addStyle() {
    try {
        $('#myHeading').addClass('highlight');
        console.log("Class 'highlight' added.");
    } catch (error) {
        console.error("Error in addStyle():", error.message);
    } finally {
        console.log("addStyle() executed.");
    }
}

function removeStyle() {
    try {
        $('#myHeading').removeClass('highlight');
        console.log("Class 'highlight' removed.");
    } catch (error) {
        console.error("Error in removeStyle():", error.message);
    } finally {
        console.log("removeStyle() executed.");
    }
}

function toggleStyle() {
    try {
        $('#myHeading').toggleClass('color');
        console.log("Class 'highlight' toggled.");
    } catch (error) {
        console.error("Error in toggleStyle():", error.message);
    } finally {
        console.log("toggleStyle() executed.");
    }
}