
exports.up = function(knex, Promise) {
  return knex.schema
   .createTable('Stoks', function(table) {
     table.increments('id').primary();
     table.string('item_name',100);
     table.integer('qty');
     table.string('image')
     table.integer('users').unsigned();

     table.foreign('users')
     	  .references('Users.id')
     	  .onDelete('cascade')
     	  .onUpdate('cascade');

   });
};

exports.down = function(knex, Promise) {
     return knex.schema
            .dropTable('Stoks')
};
