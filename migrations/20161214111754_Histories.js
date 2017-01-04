
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('Histories', function(table) {
     table.increments('id').primary();
     //status history in or out (status_code ) if in 1 if out 0
     table.integer('status_code')
     table.integer('qty')
     table.datetime('date')
     table.integer('users').unsigned();
     table.integer('stoks').unsigned();
     table.foreign('users')
     	  .references('Users.id')
     	  .onDelete('cascade')
     	  .onUpdate('cascade');

    table.foreign('stoks')
     	  .references('Stoks.id')
     	  .onDelete('cascade')
     	  .onUpdate('cascade');


   });
};

exports.down = function(knex, Promise) {
  return knex.schema
            .dropTable('Histories')
};
