const express = require('express');
const app = express();
const session = require('express-session');
const html = require('html');
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/docs', (req, res) => {
    res.render('docs.html')
})

app.get('/test', (req, res) => {
    res.render('test.php')
})



const listener = app.listen(1881)
console.log(`Listening at ${listener.address().port}`);
