const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
   
  id:{
    type: DataTypes.STRING,
    primaryKey:true,
    allownull: false
  },
  name:{
    type: DataTypes.STRING,
    allownull: false
  },
  flags:{
    type: DataTypes.STRING,
    allownull: false
  }, 
  continents:{
    type: DataTypes.STRING,
    allownull:false
  },
  capital:{
    type: DataTypes.STRING,
    allownull: false,
  },
  subregion:{
    type: DataTypes.STRING,
    allownull: true
  },
  area:{
    type: DataTypes.FLOAT,
    allownull:true,
  },
  population:{
    type: DataTypes.INTEGER,
    allownull: false
  }
  
  });

};