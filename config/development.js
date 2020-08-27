require('dotenv').config();
module.exports = {
  contentstack: {
    api_key: process.env.DB_USER,
    access_token: process.env.DB_PASS,
    environment: process.env.DB_HOST
  }
}