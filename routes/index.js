var express = require('express');
var router = express.Router();

var database = require('../lib/mongo.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/users', function(req,res) {
  console.log("Checkin from: " + req.param('name'));
  
  var user = {
    name: req.param('name'),
    email: req.param('email')
  };
  database.addUser(user, function(doc){
    res.end(doc ? "OK" : "ERROR");
  });
  
});

router.get('/list', function(req,res){
  database.getUsers(function(users){
    res.render('list', { users: users, total: users.length });
  });
  
});


module.exports = router;
