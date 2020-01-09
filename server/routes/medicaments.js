const express = require('express');
const app = express();

const medicaments = require('../models/medicaments');

app.get('/medicaments',async (req, res) => {
    try {
        const medicamentsDB = await medicaments.find()
        .exec();
        res.status(200);
        return res.json(medicamentsDB);

    } catch (error) {
        
        res.status(400);
        return res.json(error);
    }
})

module.exports = app;