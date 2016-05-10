exports.up = function(knex, Promise) {
   return knex.schema.createTable('cards', function(table){
    table.increments('c_id');
    table.integer('deck_id').references('d_id').inTable('decks');
    table.string('question');
    table.string('answer');
    table.string('q_img');
    table.string('a_img');
    table.integer('score');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};  
