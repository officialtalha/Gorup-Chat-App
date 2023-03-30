const express = require('express');
const fs = require('fs');
const bp = require('body-parser');
const loginRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');
//------------------------------------------------------------
const app = express();
app.use(bp.urlencoded({ extended: false }));
app.use(loginRoutes);
app.use(chatRoutes);
app.listen(4000);