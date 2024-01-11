const {Activity, Country} = require ("../db");
const {Op} = require("sequelize");

const getPaises = async()=> await Country.findAll({include:Activity});


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
    const apiCountry= resCountrie.map((country)=>{
        return {
            id: country.id,
            name:country.name,
            flags: country.flags,
            population: country.population,
            area: country.area,
            continets: country.continets,
            subregion: country.subregion,
            capital: country.capital


        }
    })
    // console.log(typeof resCountrie)
  return apiCountry
}

const getAllController= async(idPais)=>{
    // console.log(idPais)
    const users= await Country.findByPk(idPais,
    
        {
        include:{
            model:Activity,
            
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