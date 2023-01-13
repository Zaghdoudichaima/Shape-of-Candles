const mongoose = require('mongoose')

const connectDB=async()=>{
try {
    await mongoose.connect(process.env.DATA)
    console.log('DB connected')
} catch (error) {
    console.log('DB not connected')
}
}


module.exports=connectDB