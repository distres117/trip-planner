var http = require('http'),
  db = require('./models');

db()
.then(function(){
  console.log('Db is connected...');
  require('./app').listen(3000, function(err){
    if (err) console.log('error: ', err);
      console.log('Server is running...');
  });
});
