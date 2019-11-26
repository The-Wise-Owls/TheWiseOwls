const mysql = require('mysql');
const config = require('./config.js');

module.exports.connection = mysql.createConnection(config);