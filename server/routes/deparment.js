const express = require('express');
const app = express();

const Department = require('../models/department');
console.log('pase');

app.get('/deparment', async (req, res) => {
    try {
  
      const deparmentDB = await Department.find()
        .exec();
      res.status(200);
      return res.json(deparmentDB);
  
  
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(400);
      return res.json(error);
    }
  
  });



module.exports = app;