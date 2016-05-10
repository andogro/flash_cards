
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cards').del(), 
    // Inserts seed entries
    knex('cards').insert(
        {
          deck_id: 1,
          question: 'What is the best band of the 70\'s',
          answer: 'King Crimson',
          q_img: 'http://rymimg.com/lk/f/a/28401b43f4b38a00ac11e1ca474f7f61/1137288.jpg',
          a_img: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/872/MI0003872620.jpg',
          score: 1,

        }),
    knex('cards').insert(
        {
          deck_id: 1,
          question: 'What is the best band of the 80\'s',
          answer: 'Def Leppard',
          q_img: 'http://img2-ak.lst.fm/i/u/arO/870e8f4b2f0f4a42b7682f2905ab37ac',
          a_img: 'http://cdn.zumic.com/wp-content/uploads/2015/10/def-lepperd-2015-tour-europe-photo.jpg',
          score: 2,

        }),
    knex('cards').insert(
        {
          deck_id: 2,
          question: 'What is the best band of the 90\'s',
          answer: 'The Smashing Pumpkins',
          q_img: 'http://loudwire.com/files/2013/03/Smashing-Pumpkins1.jpg',
          a_img: 'http://www.mtv.com/crop-images/2013/09/09/Smashing%20Pumpkins%20Official%20Site.jpg',
          score: 0,

        })                    
    );
};