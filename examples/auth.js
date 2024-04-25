const { ShipdeoAuth } = require("../src");

const clientId = 'X9NO1Hd0rRaS3VTa';
const clientSecret = 'l6NexU9Ud8r2lC75';
const baseAuthUrl = 'https://auth-api-development.shipdeo.com';

const client = new ShipdeoAuth(baseAuthUrl, clientId, clientSecret);

client.getToken()
  .then(token => console.log('Token:', token))
  .catch(err => console.error('Error:', err));
