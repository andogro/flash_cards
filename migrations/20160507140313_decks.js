
exports.up = function(knex, Promise) {
   return knex.schema.createTable('decks', function(table){
    table.increments('d_id');
    table.integer('user_id').references('u_id').inTable('users');
    table.timestamp('created').defaultTo(knex.fn.now());
    table.timestamp('last_update').defaultTo(knex.fn.now());
    table.string('deck_name');
    table.text('deck_desc');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};  
