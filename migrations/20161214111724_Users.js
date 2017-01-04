
exports.up = function(knex, Promise) {
    return knex.schema
   .createTable('Users', function(table) {
     table.increments('id').primary();
     table.string('username');
     table.string('password');
     table.string('email').unique().collate('utf8_unicode_ci');
     table.integer('rules').unsigned();

     table.foreign('rules')
     	  .references('Rules.id')
     	  .onDelete('cascade')
     	  .onUpdate('cascade');

   });
};

exports.down = function(knex, Promise) {
     return knex.schema
            .dropTable('Users')
};
