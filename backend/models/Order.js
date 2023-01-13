const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    observation: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },

    
});
module.exports = mongoose.model("Order", orderSchema);