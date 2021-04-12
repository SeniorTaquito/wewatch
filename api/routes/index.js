var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dan', function(req, res, next) {
  var user = {
    "Name": "Dan",
    "Id": 123
  };
  res.send(user);
});

router.get('/ali', function(req, res, next) {
  var user = {
    "Name": "Ali",
    "Id": 456
  };
  res.send(user);
});

router.get('/user/:id', function(req, res, next) {
  var person = {};
  console.log(req.params.id);
  if(req.params.id == 1){
    person.name = 'Charlie';
    
  }
  else {
    person.name = 'Sammy';
  }
  res.send(person);
});

module.exports = router;
