const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    brand: {
        type: String,
        maxLength: 10,
        minLength: 3
    },
    flavour: String,
    cost: {
        type: String,
        minLength: 2,
        maxLength: 4
    }
})
module.exports = mongoose.model("Icecream", icecreamSchema)