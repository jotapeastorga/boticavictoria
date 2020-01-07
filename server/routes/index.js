const express = require('express');
const app = express();

app.use(require('./deparment'));

module.exports = app;