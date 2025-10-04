function startAnimation() {
    let id = null;
    const elem = document.getElementById("d1");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame1, 5);
    function frame1() {
        if (pos == 350) {
            clearInterval(id);
            movingBox2();
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }




    function movingBox2() {
        let id = null;
        const elem1 = document.getElementById("d2");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame2, 5);
        function frame2() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem1.style.top = pos + "px";
                elem1.style.right = (350) + "px";
            }
        }
    }
}
