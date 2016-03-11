var mongoose = require('mongoose');

var placesSchema = new mongoose.Schema({
  address: {
    type:String
  },
  city: String,
  state: String,
  phone:String,
  location: [Number]
});

var hotelSchema = new mongoose.Schema({
  name: String,
  place: placesSchema,
  num_stars: {
    type: Number,
    min: 1,
    max: 5
  },
  amenities: [String]

});

var activitySchema = new mongoose.Schema({
  name: String,
  place: placesSchema,
  age_range: String
});

var restaurantSchema = new mongoose.Schema({
  name: String,
  place: placesSchema,
  cuisine: [String],
  price: {
    type: Number,
    min: 1,
    max: 5
  }
});

module.exports = {
  Place: mongoose.model('Place', placesSchema),
  Hotel: mongoose.model('Hotel', hotelSchema),
  Activity: mongoose.model('Activity', activitySchema),
  Restaurant: mongoose.model('Restaurant', restaurantSchema)
};
