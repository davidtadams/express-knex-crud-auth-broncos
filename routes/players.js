var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Players() {
  return knex('player');
}

router.get('/', function(req, res, next) {
  Players().select().then(function(players){
    res.render('players', {
      title: 'Broncos Players',
      players: players
    });
  });
});

router.get('/get/:id', function(req, res, next){
  Players().select().where('id', req.params.id).first().then(function(player){
    res.render('player', {
      title: player.first_name,
      player: player
    })
  });
});

router.get('/add', function(req, res, next){
  res.render('playersadd');
});

router.post('/add', function(req, res, next) {

});

module.exports = router;
