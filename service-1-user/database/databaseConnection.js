
const config = require("../../shared/config/config")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
	config.DATABASE_NAME,
	config.DATABASE_USER,
	config.DATABASE_PASSWORD,
	{
		host: config.DATABASE_HOST,
		dialect: config.DATABASE_DIALECT,
	}
);

module.exports = sequelize;
