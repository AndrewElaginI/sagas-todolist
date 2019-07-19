const express = require('express');
const router = express.Router({ mergeParams: true });

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'yojji',
    password: 'password',
    database: 'todo_list'
  }
});

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('todos')
    .then(todos => res.send(todos));
});

router.post('/', (req, res) => {
  knex('todos')
    .insert({
      text: req.body.todo.text,
      categoryId: Number(req.body.todo.category)
    })
    .then(() => {
      knex
        .select()
        .from('todos')
        .then(todos => res.send(todos));
    });
});

router.put('/:id', (req, res) => {
  knex('todos')
    .where({ id: req.params.id })
    .update({ completed: knex.raw('NOT ??', ['completed'])})
    .then(todos => res.redirect('/'));
});

router.delete('/:id', (req, res) => {
  knex('todos')
    .where({ id: req.params.id })
    .del()
    .then(todos => {
      res.redirect('/')
    });
});

module.exports = router;
