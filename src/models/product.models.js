const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const product = db.define(
    'product',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('not_purchased', 'purchased'),
        defaultValue: 'not_purchased',
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  
  module.exports = product;
  