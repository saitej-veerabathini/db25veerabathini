const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    brand: String,
    material: String,
    cost: String
})
module.exports = mongoose.model("Icecream", icecreamSchema)