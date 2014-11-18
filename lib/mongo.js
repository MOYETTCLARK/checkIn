


var MongoClient = require('mongodb').MongoClient; // Caps for Class
var db;


MongoClient.connect('mongodb://localhost:27017/checkin', function(err, database){
  
  if(err) throw err;
  db = database;
  
  
});

exports.addUser = function(user, cb){
  // TODO validate input
  db.collection('users').insert(user, function(err, doc){
    if(err){
      cb(null);
    }else{
        cb(doc);
      }
    
  });
};

exports.getUsers = function(cb){
  db.collection('users').find({}).toArray(function(err, users){
    if(err){
      cb([]);
    }else{
      cb(users);
    }
    
  })
  
};