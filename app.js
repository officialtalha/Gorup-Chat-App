const express = require('express');
const fs = require('fs');
const bp = require('body-parser');
//------------------------------------------------------------
const app = express();
app.use(bp.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    fs.readFile('username.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = 'no chat exist.'
        }
        res.send(`${data}
    <form onsubmit="document.getElementById('loginName').value=localStorage.getItem('username')" action="/" method="POST">
        <input id="message" type="text" name="message" placeholder="enter message">
        <input id="loginName" type="hidden" name="loginName">
        <button type="submit">send</button>
    </form>
    `);
    });

});

app.post('/', (req, res) => {
    let name = req.body.loginName;
    let msg = req.body.message;
    console.log(name, ': '+msg);
    fs.writeFile('username.txt', `  ${name}: ${msg} ||`, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

app.get('/login', (req, res) => {
    res.send(`<h1> Log In Page </h1>
    <form method="POST" onsubmit="localStorage.setItem('username', document.getElementById('loginName').value)" action="/">
        <input id="loginName" type="text" name="loginName" placeholder="enter username">
        <button type="submit">login</button>
    </form>`);
});



app.listen(4000);