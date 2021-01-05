const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.post("/insert", controllers.insert);

router.put("/update", controllers.update);

router.delete("/delete", controllers.delete);

router.get("/findAll", controllers.findAll);

router.get("/findById/:id", controllers.findById);

module.exports = router;
