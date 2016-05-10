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
    getSingleUser: function(id){
        return knex.from('users').fullOuterJoin('posts', 'users.u_id', 'posts.u_id')
        .fullOuterJoin('events', 'posts.e_id', 'events.e_id')
        .where('users.u_id',id)
        .then(function(results) {
            return results;
        });
    },

    addUser: function(fname,lname,email,password,img,bio){
        return Users().insert({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            u_img: img,
            bio: bio
        })
        .then(function(results) {
            return results;
        });
    },
    editUser: function(id,fname,lname,email,password,img,bio) {
        return Users().where('u_id',id).update({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            u_img: img,
            bio: bio
        })
        .then(function(results) {
            return results;
        }); 
    },
    deleteUser: function(id) {
      return Users().where('u_id', id).del().then(function(results) {
          return results;
        });
     }

};
