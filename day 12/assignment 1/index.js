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

// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users1.find(
//         user => user.id === id
//     );
//     return res.json(user);
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/adduser', (req, res) => {
    const data = req.body;
    console.log("data: " + data.email);
    users1.push({ data, id: users1.length + 1 });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users1), (err) => {
        console.error(err);
    });
});

app.listen(port, () => {
    console.log(`Server running on port `);
});

