module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'defne1989'
     },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};