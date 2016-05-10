var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/gstudy';
var knex = require('../../../db/knex');
var queries = require('../queries/queries');
var path = require('path');

// get all
router.get('/', function(req, res, next) {
  res.sendFile('/index.html');
});

// get all users
router.get('/users', function(req, res, next) {
 queries.getAllUserPage()
 .then(function(results) {
   res.status(200).json({
      data: results
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// // get all decks
// router.get('/decks', function(req, res, next) {
//  queries.getAllDecks()
//   .then(function(results) {
//    res.status(200).json({
//       status: 'success',
//       data: results
//     });
//   })
//   .catch(function (err) {
//     return next(err);
//   });
// });

// get all users
router.get('/cards', function(req, res, next) {
 queries.getAllCards()  
 .then(function(results) {
   res.status(200).json({
      status: 'success',
      data: results
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// get decks for an individual
router.get('/decks/:id', function(req, res, next) {
var id = req.params.id;
 queries.getUserDecks(id)  
 .then(function(results) {
   res.status(200).json({
      data: results
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// get decks for an individual
router.get('/singledeck/:id', function(req, res, next) {
var id = req.params.id;
 queries.showOneDeck(id)  
 .then(function(results) {
   res.status(200).json({
      data: results
    });
  })
  .catch(function (err) {
    return next(err);
  });
});


 // Get create new deck form
// router.get('/deck/new', function(req, res, next) {
//   res.sendFile('/index.html');
// });

//  Post to create a new deck
router.post('/deck/new', function(req, res, next) {
var deckname = req.body.deck_name;
var deckdesc = req.body.deck_desc;
var question = req.body.question;
var answer = req.body.answer;
var q_img = req.body.q_img;
var a_img = req.body.a_img;
 queries.addDeck(deckname,deckdesc,question,answer,q_img,a_img,deck_id)
 .then(function(fullresults) {
      console.log("full results"+fullresults)
      res.status(200).json({
      data: fullresults
    });
   })
  });




module.exports = router;
