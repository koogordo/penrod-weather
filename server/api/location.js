const express = require('express');
const router = express.Router();
const mongo = require('mongoose');
const Location = require('../models/Location');

// GET
// fetch a location doc by a city id
router.get('/fetch/:id', (req, res) => {
   errors = {}
  Location.findOne({ cityId: req.params.id }).then(loc => {
     if(res) {
      res.json(loc);
     } else {
        errors.location = `location with the id ${req.params.id} could'nt be found`
        res.status(400).json(errors);
     }
    
  }).catch(err => {
     console.log(err);
  });
});

// GET
// fetch all location docs
router.get('/all', (req, res) => {
  errors = {}
  Location.find().then(locs => {
     if (locs) {
      res.json(locs);
     } else {
        errors.allLocations = 'Could not fetch all locations';
     }
    
  }).catch(err => {
     console.log(err)
  });
});

// POST
// add a new location
router.post('/createlocation', (req, res) => {
   if (req.body) {
      Location.save()
   }
})

module.exports = router;
