const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/databaseConnection");
const Role = require("./Rol");
const User = sequelize.define("users", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING
      },
      codeRecover: {
        type: Sequelize.STRING,
      },
      rol_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
});

User.belongsTo(Role, { foreignKey: 'rol_id' });
Role.hasOne(User, { foreignKey: 'rol_id' });

module.exports = User;