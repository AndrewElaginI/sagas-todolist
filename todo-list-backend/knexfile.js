// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'yojji',
      password: 'password',
      database: 'todo_list'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'yojji',
      password: 'password',
      database: 'testdb'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'yojji',
      password: 'password',
      database: 'testdb'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
