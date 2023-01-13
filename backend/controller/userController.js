const User = require("../models/User")


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ msg: "All users", users });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updateuser=async(req,res)=>{
  const{id} = req.params;
   try {
     const updateuser = await User.findByIdAndUpdate(
         id,{$set:{...req.body},},{new:true}
     );
     res.status(200).send({msg:"user updated", updateuser});
   } catch (error) {
     res.status(500).send("server error");
   }
 };
