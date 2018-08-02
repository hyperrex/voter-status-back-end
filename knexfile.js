// Define DB connections for different environments
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/voter-status-dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  testing: {
    client: 'pg',
    connection: 'postgres://localhost/voter-status-test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    }
  }
}
