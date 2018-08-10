// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///dinotwo-sever'
  },


  production: {
    client: 'pg',
    connection: process.env.DATEBASE_URL + '?ssl=true'
  }

};
