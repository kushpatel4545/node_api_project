const mongoose = require("mongoose");

const gCartSchema = new mongoose.Schema({
    cartUserID: String,
    cartProdutID:String,
    productQty:Number,
    cartTotal:Number
});

const googleCart = mongoose.model("googleCart", gCartSchema);

module.exports = googleCart;