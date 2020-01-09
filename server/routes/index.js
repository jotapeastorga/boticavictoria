const express = require('express');
const app = express();

app.use(require('./deparment'));
app.use(require('./medicaments'));

module.exports = app;