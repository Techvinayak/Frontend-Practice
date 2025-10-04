import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();


app.set('views', './views');
app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.redirect('/Calc');
});


app.get('/Calc', (req, res) => {
    res.render('Calc');
});


app.post('/docalculation', (req, res) => {
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = parseInt(n1) + parseInt(n2);
    res.render('calc', { result: sum });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
