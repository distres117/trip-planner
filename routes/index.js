var router = require('express').Router();
var models = require('../models/models');
var Promise = require('bluebird');

router.get('/',function(req,res,next) {
  Promise.all([models.Hotel.find(), models.Activity.find(), models.Restaurant.find()])
    .spread(function(hotels, activities, restaurants) {
      res.render('index',{
        hotels: hotels,
        activities: activities,
        restaurants: restaurants
      })
    })
});

module.exports = router;


