
const {ActivityController, PostController} = require ("../controllers/ActivitiesController")



const  activitisHandler=async(req, res)=>{

    try {
        const getActivities = await ActivityController();
        res.status(200).json(getActivities);
    } catch (error) {
        res.status(400).json({error: error.mesege})
    }
   
}

const postHandler=async(req, res)=>{
    const { id, name, difficulty, duration,season, countries }= req.body;
    // console.log(req.body)
    
    try {

        const createActivity = await PostController(id, name, difficulty,duration, season, countries);
        res.status(201).json(createActivity)
    } catch (error) {
        res.status(400).json({error: error.message})
    }


}


module.exports= {activitisHandler, postHandler};