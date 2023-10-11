const { Router }= require("express");
const {activitisHandler, postHandler} = require("../handlers/handlerActivities");

const activitiesRouter = Router();

activitiesRouter.get("/", activitisHandler);

activitiesRouter.post("/",postHandler);

module.exports= activitiesRouter;