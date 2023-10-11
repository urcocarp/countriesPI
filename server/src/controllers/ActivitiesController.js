const {Activity, Country} = require ("../db")


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
    // console.log(name)
    const activities = await Activity.create({id, name, difficulty,duration, season, countries})
      console.log(activities)
      activities.addCountries(countries) 

    return activities;


}
    

module.exports={ActivityController, PostController}
