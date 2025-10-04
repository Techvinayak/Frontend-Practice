document.getElementById("b1").addEventListener("click", function () {
    let id = document.getElementById("n1").value;

    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id);
    request.send();

    request.onload = function () {
        if (this.status === 200) {
            let item = JSON.parse(this.responseText);
            document.getElementById("d1").innerText = item.title;
        } else {
            document.getElementById("d1").innerText = "Post not found!";
        }
    };
});
