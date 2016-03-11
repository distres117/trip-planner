var mongoose = require('mongoose');

var conn;
module.exports = function(){
  if (!conn)
    conn = mongoose.connect("mongodb://localhost/trip-planner");
  return conn;
};
