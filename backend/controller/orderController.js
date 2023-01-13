const Order = require("../models/Order");

exports.makeorder=async(req,res)=>{
    const {observation}=req.body;
   try{
  const order = new Order({
    observation :req.body.observation,
    userId :req.user.id,
    productId :req.product.id
  });
     await order.save();
     res.status(201).send({msg:"pass an order",order});
          }catch(error){
         res.status(500).send("server error");
        } 
 };
 exports.oneorder = async(req,res) =>{
    const { id } = req.params;
    try {
        const order = await Order.find(id,{userId:req.user.id}).populate("userId","productId");
        res.status(201).send({msg:"the order", order});
    }catch(error){
   res.status(500).send("server error");
  } 
}; 

 exports.allorders= async(req,res) =>{
    try {
        const orders = await Order.find().populate("userId","productId");
        res.status(201).send({msg:"all orders",orders});
    }catch(error){
   res.status(500).send("server error");
  } 
};

exports.deleteorder=async(req,res) =>{
    const {id} = req.params;
    try {
        await Order.findByIdAndDelete(id);
        res.status(200).send({msg:"order deleted"});
    } catch (error) {
        res.status(500).send("server error");
    }
};
