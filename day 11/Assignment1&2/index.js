const express = require('express');
const users1 = require('./Mock_DATA.json');
const port = 3000;
let app = express();
app.get('/', (req, res) => {
    res.send("Extecuted by Vinayak");
});

app.get('/users1', (req, res) => {
    //res.json(users1);
});
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users1.find(
        user => user.id === id
    )
    return res.json(user);
})
app.listen(port);
console.log("Server started");
