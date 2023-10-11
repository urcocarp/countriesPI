const { DataTypes } = require('sequelize');

module.exports= (sequelize)=>{
    sequelize.define('Activity',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                min:1,
                max:5
            }
        },
        duration:{
           type: DataTypes.TIME(4),
           allowNull: true 
        },

        season:{
            type: DataTypes.ENUM("verano","otoño","invierno","primavera"),
            allowNull: false
        },
    },{timestamps:false})
}