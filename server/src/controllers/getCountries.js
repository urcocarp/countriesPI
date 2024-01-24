const axios = require ("axios");

const getCountries=async() =>{
    const Countries = await axios.get(`http://localhost:5000/countries`)
// console.log(Countries)
const DataCountries = Countries.data.map((countrie)=>{

    return {
        id:countrie.cca3,
        name: countrie.name.common,
        flags: countrie.flags.png,
        continents: countrie.continents[0],
        capital: countrie.capital,
        subregion: countrie.subregion,
        area: countrie.area,
        population:countrie.population,
        
    }
   
 })


  return DataCountries;
}




module.exports= getCountries;