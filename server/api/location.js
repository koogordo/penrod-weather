const express = require('express');
const router = express.Router();
const mongo = require('mongoose');
const Location = require('../models/Location');

router.get('/fetch/:id', (req, res) => {
  Location.findOne({ cityId: req.params.id }).then(loc => {
    res.json(loc);
  });
});

router.get('/all', (req, res) => {
  Location.find().then(locs => {
    res.json(locs);
  });
});

module.exports = router;
