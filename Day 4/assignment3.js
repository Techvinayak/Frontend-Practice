let count = 0;

function display() {
    count++;
    document.getElementById("countDisplay").innerText = `You clicked ${count} times.`;

    if (count >= 10) {
        document.getElementById("clickBtn").disabled = true;
    }
}
