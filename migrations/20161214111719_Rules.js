
exports.up = function(knex, Promise) {
  return knex.schema
   .createTable('Rules', function(table) {
     table.increments('id').primary();
     table.string('status');
   });
};

exports.down = function(knex, Promise) {
    return knex.schema
            .dropTable('Rules')  
};
