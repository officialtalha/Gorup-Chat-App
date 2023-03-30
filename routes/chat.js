const express = require('express');
const fs = require('fs');
const bp = require('body-parser');

const router = express.Router();
router.use(bp.urlencoded({ extended: false }));

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
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

module.exports = router;