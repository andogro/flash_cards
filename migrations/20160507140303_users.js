
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', function(table){
    table.increments('u_id');
    table.string('fname');
    table.string('lname');
    table.text('bio');
    table.string('email');
    table.string('password');
    table.string('u_img');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
