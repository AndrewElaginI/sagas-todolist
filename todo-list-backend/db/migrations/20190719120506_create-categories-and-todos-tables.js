
exports.up = function(knex) {
  return knex.schema
  .createTable('categories', table => {
    table.increments();
    table.string('category').notNullable();
  })
  .createTable('todos', table => {
    table.increments();
    table.string('text').notNullable();
    table.boolean('completed').defaultTo(false);
    table
      .integer('categoryId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('categories');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos').dropTable('categories');
};
