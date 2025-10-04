const express = require('express');
const users1 = require('./Mock_DATA.json');
const port = 3000;
let app = express();
app.get('/', (req, res) => {
    res.send("Extecuted by Vinayak");
});

app.get('/users1', (req, res) => {
    res.json(users1);
});
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users1.find(
        user => user.id === id
    )
    return res.json(user);
})
// app.get('/users/:email', (req, res) => {
//     const id = parse(req.params.email);
//     const user = users1.find(
//         user => user.email === email
//     )
//     return res.json(user);
// })

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users1.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = users1.splice(userIndex, 1);
    return res.json("Dae ");
});

app.listen(port);
console.log("Server started");
