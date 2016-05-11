var knex = require('../../../db/knex');
var Users = function() { return knex('users');};
var Decks = function() {return knex('decks');};
var Cards = function() {return knex('cards');};

module.exports = {
    getAllUserPage: function(){
        return Users()
        .then(function(results) {
            return results;
        });
    },
    getAllDecks: function(){
        return Decks().join('cards', 'decks.d_id', '=', 'cards.deck_id')
        .then(function(results) {
            return results;
        });
    },
    getAllCards: function(){
        return Cards()
        .then(function(results) {
            return results;
        });
    },
    getUserDecks: function(id){
        return Decks().join('cards', 'decks.d_id', '=', 'cards.deck_id')
        .where('decks.user_id',id)
        .then(function(results) {
            console.log("user deck results"+results)
            return results;
        });
    },
    showOneDeck: function(id){
        return Decks().join('cards', 'decks.d_id', '=', 'cards.deck_id')
        .where('decks.d_id',id)
        .then(function(results) {
            console.log("one deck results"+results)
            return results;
        });
    },
    addDeck: function(info){
        console.log("this is first query"+info)
        return Decks().insert({
            deck_name: info.deckname,
            deck_desc: info.deckdesc,
        })
        .then(function() {
            return Decks()
            .then(function(results) {
            console.log("Deck results"+JSON.stringify(results));
            var lastDeck = results.pop();
            var deck_id = lastDeck.d_id;
            return Cards().insert({
              deck_id: deck_id,
              question: info.question,
              answer: info.answer,
              q_img: info.q_img,
              a_img: info.a_img
          })    
        })
       })   
      },  

    // !Routes to be added
    // addQuestion: function(deck_id,question,answer,q_img,a_img){
    //       return Cards().insert({
    //           deck_id: deck_id
    //           // question: question,
    //           answer: answer,
    //           q_img: q_img,
    //           a_img: a_img,
    //       })
    //       .then(function(results) {
    //           return results;
    //       });
    //     }, 

    // addUser: function(fname,lname,email,password,img,bio){
    //     return Users().insert({
    //         fname: fname,
    //         lname: lname,
    //         email: email,
    //         password: password,
    //         u_img: img,
    //         bio: bio
    //     })
    //     .then(function(results) {
    //         return results;
    //     });
    // },
    // editUser: function(id,fname,lname,email,password,img,bio) {
    //     return Users().where('u_id',id).update({
    //         fname: fname,
    //         lname: lname,
    //         email: email,
    //         password: password,
    //         u_img: img,
    //         bio: bio
    //     })
    //     .then(function(results) {
    //         return results;
    //     }); 
    // },
    // deleteUser: function(id) {
    //   return Users().where('u_id', id).del().then(function(results) {
    //       return results;
    //     });
    //  }

};
