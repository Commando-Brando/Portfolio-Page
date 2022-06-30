const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Database connected successfully');
})
.catch(err => {
    console.log(err);
});

const app = express();

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, 'views')); // set the views directory

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // static lets us send images and css files to client side

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/question-submit', (req, res) => {
    res.render('question-submit', {title: 'Question Submit'});
});

app.get('/quick-start', (req, res) => {
    res.render('quick-start', {title: 'Quick Start'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'});
});

function test() {
    console.log('test ' + this.i);
}
//setInterval(test, 1000);

app.post("/", (req, res) => {
    var question = req.body.question;
    console.log(question);
    var answer = req.body.answer;
    console.log(answer);
    var qlink = req.body.qlink;
    console.log(qlink);
    res.sendFile(__dirname + '/html/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});