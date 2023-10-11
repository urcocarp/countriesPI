const { Router } = require("express");
const CountriesRouter = require("./CountriesRouter");
const activitiesRouter = require("./ActivityRouter");



const router = Router();


router.use("/countries",CountriesRouter)
router.use("/activities", activitiesRouter)

// router.use("/", useRouter);
// router.use("/countries", useRouter);
// router.use("/countries/:idPais", useRouter);
// router.use("/name",useRouter);
// router.use("/GetActivity", postRouter);
// router.use("/activity", postRouter);






module.exports = router;
