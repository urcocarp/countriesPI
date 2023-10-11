const { Router }= require("express");
const {getCountriesHandler,IdHandler }= require("../handlers/handlerCountries");

const CountriesRouter= Router();



CountriesRouter.get("/", getCountriesHandler);
CountriesRouter.get("/:idPais", IdHandler);
// CountriesRouter.get("/name", nameHandler )


module.exports= CountriesRouter;