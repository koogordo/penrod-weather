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
      const newLocation = req.body;
      Location.save(newLocation).then(() => {
         res.status(200).json({success: 'New location was successfuly added.'});
      }).catch(err => {
         res.status(400).json({error: 'Failed to add location.'})
      })
   } else {
      res.status(400).json({error: 'Request to add location was sent with no data'});
   }
})

// POST
// delete a location
router.post('/deletelocation', (req,res) => {
   errors = {};
   if (req.body) {
      Location.findOneAndDelete({cityId: req.body.cityId}).then(() => {
         res.status(200).json({success: 'Location successfuly removed.'});
      }).catch(err => {
         res.status(400).json({error: 'Failed to delete location.'})
      })
   }  else {
      res.status(400).json({error: 'Request to delete location was sent with no data'});
   }
})

module.exports = router;
