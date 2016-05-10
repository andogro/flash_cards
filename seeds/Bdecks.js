
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('decks').del(), 

    // Inserts seed entries
    knex('decks').insert(
        {
          user_id: 1,
          deck_name: 'Don\'t be a Deck',
          deck_desc: 'How can you be cool?',
          created: '2016-04-16 20:07:28-06',
          last_update: '2016-04-17 20:07:28-06'
        }),
    knex('decks').insert(
        {
          user_id: 2,
          deck_name: 'Swab the Deck',
          deck_desc: 'Deck Swabbing 101',
          created: '2016-03-16 20:07:28-06',
          last_update: '2016-03-21 20:07:28-06'
        }),
    knex('decks').insert(
        {
          user_id: 3,
          deck_name: 'The age of Deckadance',
          deck_desc: 'The Tech Bubble',
          created: '2016-04-22 20:07:28-06',
          last_update: '2016-05-02 20:07:28-06'
        })
    );
};