var http = require('http'),
  db = require('./models');

db()
.then(function(){
  console.log('Db is connected...');
  http.createServer(require('./app')).listen(3000, function(){
    console.log('Server is running...');
  });
});
