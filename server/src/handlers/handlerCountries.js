const {getPais, getAllController, getPaises}= require("../controllers/getCountrieController")

// const DataCountries = require("../controllers/getCountries")

const getCountriesHandler =async(req, res)=>{
   const { nombre } = req.query;
   console.log(req.query)
try{

    const resName= nombre?await getPais(nombre): await getPaises()
    console.log(resName)
    res.status(200).json(resName)
}
catch(error){
    res.status(404).json({error:error.messenge})
}

    // if(nombre){
    //     const resName = await getPais(nombre)
    //     res.status(200).json(resName)
    // }else{
    //     const name =await getPaises();
    //     // console.log(name)
    //     res.status(200).json(name)
    // }
};

const IdHandler = async (req, res)=>{
    
    const { idPais } = req.params;
    // console.log(idPais)
    // const source = isNaN(id) ? "bbd": "api"
 
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