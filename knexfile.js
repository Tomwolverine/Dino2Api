// Update with your config settings.

module.exports = {

  development: {
    client: 'pg,
    connection: 'postgresql:///dinotwo-sever'
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATEBASE_URL + '?ssl=true'
  }

};
