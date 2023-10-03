const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const config = {
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT,
    PORT_USER: process.env.PORT_USER,
    URL_FRONTEND: process.env.URL_FRONTEND,
};

module.exports = config;
