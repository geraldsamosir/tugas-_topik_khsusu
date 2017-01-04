
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Supliers', function(table) {
     table.increments('id').primary();
     table.string('name');
     table.string('email').unique().collate('utf8_unicode_ci');
     table.string('phone_number')
     table.integer('users').unsigned();

     table.foreign('users')
     	  .references('Users.id')
     	  .onDelete('cascade')
     	  .onUpdate('cascade');


   });
};

exports.down = function(knex, Promise) {
  return knex.schema
            .dropTable('Supliers')
};
