const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('country', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags:{
      type: DataTypes.TEXT,
      allowNull: true,  
    },
    continents:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    area:{
      type: DataTypes.DECIMAL,
      allowNull: false,

    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }

    
  });
};
