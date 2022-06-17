require('dotenv').config();

const config = {
  user: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  server: 'localhost',
  database: 'bookBase',
  options: {
    trustServerCertificate: true,
  },
  port: 1433,
};

module.exports = config;
