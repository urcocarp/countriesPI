const {Activity, Country} = require ("../db") // interacuan con la base de datos 


const ActivityController =async()=> await Activity.findAll({

    include:{
        model:Country,
        attributes:["name"],
        through:{
            attributes:[],
        },
    },
});

const PostController =async(id, name, difficulty,duration, season,countries)=>{
    console.log(countries)
    const newActivity = await Activity.create({ name, difficulty,duration, season, countries})
    //   console.log(activities)
      const selectCountries = await Country.findAll({///nos quedamos con los paises que recibimos por parametro
        where: {
            id: countries
        }

    });
    console.log(selectCountries)
    return newActivity.addCountry(selectCountries) ///aqui es donde se hacen las relaciones de modelo//aqui unimos los paises con las actividades
    
    


}
    

module.exports={ActivityController, PostController}
