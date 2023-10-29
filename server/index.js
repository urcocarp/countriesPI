const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const getCountries = require ("./src/controllers/getCountries")
const {Country} = require("./src/db.js")







conn.sync({ force: false}).then(async() => {
  try {
  const countries = await getCountries();
  await Country.bulkCreate(countries) 
// console.log(countries)

} catch (error) {
  console.error("error al cargar los datos",error);
}



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
