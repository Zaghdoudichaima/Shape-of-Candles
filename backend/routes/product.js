const express = require ("express");
const { addproduct, updateproduct, allproduct, deleteproduct} = require("../controller/productController");


// const upload = require ("../middleware/upload");
const router=express.Router()

router.post("/addproduct",addproduct);
// router.put("/productimage", isAuth, upload.single("Image"), uploadpicture);
router.put("/update/:id",updateproduct);
router.get("/getproducts", allproduct);
router.delete("/delete/:id",deleteproduct)


module.exports = router;
