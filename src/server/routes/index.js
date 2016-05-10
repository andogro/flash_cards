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


// //Post to create a new deck
// router.post('/deck/new', function(req, res, next) {
//   var e_name = req.body.e_name;
//   var desc = req.body.desc;
//   var start = null;
//   var end = null;
//   var e_latitude = req.body.e_latitude;
//   var e_longitude = req.body.e_longitude;
//   var public = true;
//   var code = null;
//   var e_img = req.body.e_img;
//   var et_id = parseInt(req.body.et_id);
//   placequery.addEvent(e_name,desc,start,end,e_latitude,e_longitude,public,code,e_img,et_id).then(function(results){
//     res.redirect('/places');
//   });
// });



// //post to create new imprint
// router.post('/:id', function(req,res,next) {
//   var post = req.body.post;
//   var created_at = req.body.created_at;
//   var e_id = req.params.id;
//   var u_id = req.body.u_id;
//   placequery.addImprint(post,created_at,e_id,u_id).then(function(results) {
//   res.redirect('/places/'+ e_id);
//   });
// });

// router.get('/:id/proximity', function (req, res, next) {
//   console.log('query params:', req.query);
//     var id = req.params.id;
//     placequery.getSingleEvents(id).then(function(results) {
//     var eventLat = parseFloat(results[0].e_latitude);
//     var eventLon = parseFloat(results[0].e_longitude);
//     var locationProximity = placequery.proximity(eventLat, eventLon, .03);
//     var userProx = placequery.proximity(req.query.lat, req.query.lon, .000);
//     var overlap = placequery.proximityOverlap(userProx, locationProximity);
//     res.status(200).json(overlap);
//   });
// });

// // new
// router.get('/geo', function(req, res, next) {
//   var key = process.env.MAPS;
//   res.render('places/geo', { title: 'Geo test', api: key});
// });



module.exports = router;
