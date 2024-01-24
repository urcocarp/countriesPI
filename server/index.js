const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const getCountries = require ("./src/controllers/getCountries")
const {Country} = require("./src/db.js")
require("dotenv").config();
const {
  DB_USER, DB_PASSWORD, DB_HOST, BDD,PORT
} = process.env;








conn.sync({ force: true}).then(async() => {
  try {
  const countries = await getCountries();
  await Country.bulkCreate(countries) 
// console.log(countries)

} catch (error) {
  console.error("error al cargar los datos",error);
}



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(DB_USER, DB_PASSWORD, DB_HOST, BDD,PORT)
})

}).catch(error => console.error(error))
