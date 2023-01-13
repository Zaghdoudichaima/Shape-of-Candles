const Product = require ("../models/Product");

exports.addproduct=async(req,res)=>{
   const { title,image,price }= req.body;
  
  try{
 const product = new Product({
    title,
    price,
    image
 });
    await product.save();
    res.status(201).send({msg:"product created",product});
         }catch(error){
        res.status(500).send("server error");
       } 
};


// exports.uploadpicture = async (req, res) => {
//   try {
//       await Product.findById(req.product.id, {
//           $set: {image: req.file.filename },
//       });
//       res.send("image uploaded");
//   } catch (error) {
//       console.log(error.message);
//   }
// };

exports.allproduct = async(req,res) =>{
    try {
        const product = await Product.find();
        res.status(201).send({msg:"all product",product});
    }catch(error){
   res.status(500).send("server error");
  } 
};

exports.updateproduct=async(req,res)=>{
 const{id} = req.params;
  try {
    const updateproduct = await Product.findByIdAndUpdate(
        id,{$set:{...req.body},},{new:true}
    );
    res.status(200).send({msg:"product updated", updateproduct});
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.deleteproduct=async(req,res) =>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).send({msg:"product deleted"});
    } catch (error) {
        res.status(500).send("server error");
    }
};

