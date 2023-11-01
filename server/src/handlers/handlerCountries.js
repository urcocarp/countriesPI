const {getPais, getAllController, getPaises}= require("../controllers/getCountrieController") 

// const DataCountries = require("../controllers/getCountries")
// aca donde recibimos req de front y respondemos con res

const getCountriesHandler =async(req, res)=>{
   const { nombre } = req.query; 
   console.log(req.query)
try{

    const resName= nombre?await getPais(nombre): await getPaises()
    // console.log(resName)
    res.status(200).json(resName)
}
catch(error){
    res.status(404).json({error:error.messenge})
}

};

const IdHandler = async (req, res)=>{
    
    const { idPais } = req.params;

 
try{
    const countryId =await getAllController(idPais) 
    // console.log(countryId)
    res.status(200).json(countryId)

 }catch(error){
    res.status(400).json({error:error.messenge})
 }

};

// const nameHandler = (req, res)=>{
//     res.status(200).send("estoy en name")
// };


module.exports= {getCountriesHandler, IdHandler}