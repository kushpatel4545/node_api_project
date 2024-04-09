const mongoose = require("mongoose");

const gOrderSchema = new mongoose.Schema({
    orderUserID:String,
    orderProductID:String,
    OrderQTY:Number,
    orderTotal:Number,
});

const googleOrder = mongoose.model("googleOrder", gOrderSchema);

module.exports = googleOrder;