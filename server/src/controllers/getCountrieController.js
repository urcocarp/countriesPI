const {Activity, Country} = require ("../db");
const {Op} = require("sequelize");

const getPaises = async()=> await Country.findAll();


const getPais=async(nombre)=>{
const resCountrie = await Country.findAll(
    {
        where:{
            name:{
                [Op.iLike]: `%${nombre}%`
            }
        }
    }
    )
    // console.log(typeof resCountrie)
  return resCountrie
}

const getAllController= async(idPais)=>{
    // console.log(idPais)
    const users= await Country.findByPk(idPais,
    
        {
        include:{
            model:Activity,
            attributes:["name"],
            through:{
                attributes:[],
            },
        }
    }
    );
   if (users){
    return users
   }else{
    throw new error ("el pais no exite")
   }



}

module.exports = {getPais, getAllController, getPaises};