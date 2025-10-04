function submitFunction() {
    let name = document.getElementById("n1").value;
    let email = document.getElementById("e1").value;
    let phone = document.getElementById("p1").value;
    let address = document.getElementById("a1").value;

    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = phone;
    newRow.insertCell(3).innerHTML = address;

    let actionCell = newRow.insertCell(4);
    actionCell.innerHTML = `
        <button onclick="editData(this)">Edit</button>
        <button onclick="deleteData(this)">Delete</button>
    `;

    clearInputs();
}

function editData(button) {
    let row = button.parentNode.parentNode;

    let nameCell = row.cells[0];
    let emailCell = row.cells[1];
    let phoneCell = row.cells[2];
    let addressCell = row.cells[3];

    let nameInput = prompt("Enter the updated name:", nameCell.innerHTML);
    let emailInput = prompt("Enter the updated email:", emailCell.innerHTML);
    let numberInput = prompt("Enter the updated mobile details:", phoneCell.innerHTML);
    let addressInput = prompt("Enter the updated address:", addressCell.innerHTML);

    nameCell.innerHTML = nameInput;
    emailCell.innerHTML = emailInput;
    phoneCell.innerHTML = numberInput;
    addressCell.innerHTML = addressInput;
}

function deleteData(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function clearInputs() {
    document.getElementById("n1").value = "";
    document.getElementById("e1").value = "";
    document.getElementById("p1").value = "";
    document.getElementById("a1").value = "";
}
