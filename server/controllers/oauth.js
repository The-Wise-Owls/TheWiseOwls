const { google } = require('googleapis');
const { CLIENT_ID, API_KEY, CLIENT_SECRET } = require('./googleConfig');

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  'http://localhost:3000/adminSplash'
);

module.exports = oauth2Client;