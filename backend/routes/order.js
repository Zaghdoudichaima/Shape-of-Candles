const express = require ("express");
const { makeorder, allorders, deleteorder, oneorder } = require("../controller/orderController");


const router=express.Router();


router.post("/passorder",makeorder);
router.get("/oneorder/:id", oneorder);
router.get("/allorders", allorders);
router.delete("/deleteorder/:id",deleteorder);



module.exports = router;