
const config = require("../../shared/config/config")
module.exports = {
	development: {
		username: config.DATABASE_USER,
		password: config.DATABASE_PASSWORD,
		database: config.DATABASE_NAME,
		host: config.DATABASE_HOST,
		dialect: config.DATABASE_DIALECT,
	},
	test: {
		username: config.DATABASE_USER,
		password: config.DATABASE_PASSWORD,
		database: config.DATABASE_NAME,
		host: config.DATABASE_HOST,
		dialect: config.DATABASE_DIALECT,
	},
	production: {
		username: config.DATABASE_USER,
		password: config.DATABASE_PASSWORD,
		database: config.DATABASE_NAME,
		host: config.DATABASE_HOST,
		dialect: config.DATABASE_DIALECT,
	},
};