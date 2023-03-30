const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send(`<h1> Log In Page </h1>
    <form method="POST" onsubmit="localStorage.setItem('username', document.getElementById('loginName').value)" action="/">
        <input id="loginName" type="text" name="loginName" placeholder="enter username">
        <button type="submit">login</button>
    </form>`);
});

module.exports = router;

