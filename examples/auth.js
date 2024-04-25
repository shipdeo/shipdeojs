const ShipdeoAuth = require("../src");

const clientId = 'XXXXXXXX';
const clientSecret = 'XXXXXXX';
const baseAuthUrl = 'https://auth-api-development.shipdeo.com';

const client = new ShipdeoAuth(baseAuthUrl, clientId, clientSecret);

client.getToken()
  .then(token => console.log('Token:', token))
  .catch(err => console.error('Error:', err));
