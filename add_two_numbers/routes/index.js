var express= require("express");
var router= express.Router();
var addController=require("../controllers/addController");

router.route("/:firstNumber").get(addController.addNumber);
module.exports = router;
