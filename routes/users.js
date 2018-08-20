var express = require('express');
var router = express.Router();
const knex = require('../knex');

// GET users listing
router.get('/', function(req, res, next) {
  knex('users')
  .then((usersArray) => {
    res.send(usersArray)
  })
})

// POST name
router.post('/', function(req, res, next) {
  console.log('fnord')
  // send this data to the scraper and get back a Response
  knex('users')
  .where({email: 'guy.fleegman@NSEA-Protector.com'})
  .then()
})

module.exports = router;
