function saveData() {
    const Name = document.getElementById('Name').value.trim();
    const last_name = document.getElementById('last_name').value.trim();
    const age = document.getElementById('age').value.trim();

    const userObj = {
        Name,
        last_name,
        age
    };
    const userJSON = JSON.stringify(userObj);

    const newRow = document.createElement('tr')

    const NameCell = document.createElement('td')
    NameCell.textContent = Name
    newRow.appendChild(NameCell)

    const last_nameCell = document.createElement('td')
    last_nameCell.textContent = last_name
    newRow.appendChild(last_nameCell)

    const ageCell = document.createElement('td')
    ageCell.textContent = age
    newRow.appendChild(ageCell)

    const tableBody = document.getElementById('t1')
    tableBody.appendChild(newRow)

    const userName = Name.slice(0, 2).toLowerCase() +
        last_name.slice(-2).toLowerCase() +
        age;
    const usernameDisplay = document.createElement('p')
    usernameDisplay.id = 'username'

}
