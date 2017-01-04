var knex ={};
knex.local = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'express_kuliah_stok'
  }
});

module.exports = knex.local;
