const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('touristActivity', {
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
      difficulty:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,  
      },
      duration:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      season:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
  
      }
})
};




