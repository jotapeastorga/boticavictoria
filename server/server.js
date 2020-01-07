require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Department = require('./models/department');

app.use( require('./routes/index'));

const startServer = () => {
  console.log(`server start port : ${process.env.PORT}`);
}


const conf = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };
mongoose.connect(process.env.URLDB,
  conf,
  (err, resp) => {
    if (err) throw err;

    console.log('base de datos online ');
  });



app.listen(process.env.PORT, startServer);