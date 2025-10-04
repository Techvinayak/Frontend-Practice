function onClick() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    if (firstName && lastName && age) {
        let userInitials = firstName.substring(0, 2).toLowerCase();
        let userLastTwo = lastName.slice(-2).toLowerCase();
        let userName = userInitials + userLastTwo + age;
        document.getElementById('username').textContent = 'Username: ' + userName;
        let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        cell1.textContent = firstName;
        cell2.textContent = lastName;
        cell3.textContent = age;
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('age').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}