var express = require('express');
var router = express.Router();
const knex = require('../knex');

// GET users listing
router.get('/', function(req, res, next) {
  knex('users')
  .then((usersArray) => {
    console.log(usersArray)
    res.send(usersArray)
  })
})

// /* GET all listings for a single user*/
// router.get('/:userid', function(req, res, next) {
//   knex('users')
//   .where('id', req.params.userid)
//   .then((data) => {
//     console.log('the specific user', data)
//     res.send(data)
//   })
// });

// POST all
router.post('/', function(req, res, next) {
  knex('users')
  .then((usersArray) => {
    console.log(usersArray)
    res.send(usersArray)
  })
})

// POST create new user
router.post('/', function(req, res, next) {
  knex('users')
  .then((usersArray) => {
    console.log(usersArray)
    res.send(usersArray)
  })
})

module.exports = router;
