
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, text: 'feed the cat', categoryId: 2},
        {id: 2, text: 'pass the project', categoryId: 1},
        {id: 3, text: 'but fish meat', categoryId: 2}
      ]);
    });
};
