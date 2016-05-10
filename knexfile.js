
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/gstudy'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};