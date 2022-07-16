const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// mysql = require('mysql');

require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, 'views')); // set the views directory

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // static lets us send images and css files to client side

// app.use('/api/')

app.use('/api/', require('./routes/pages'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// function test() {
//     console.log('test ' + this.i);
// }
//setInterval(test, 1000);

// app.post("/", (req, res) => {
//     var question = req.body.question;
//     console.log(question);
//     var answer = req.body.answer;
//     console.log(answer);
//     var qlink = req.body.qlink;
//     console.log(qlink);
//     res.sendFile(__dirname + '/html/index.html');
// });