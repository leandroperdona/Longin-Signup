const mongoose = require ("mongoose")
const connect = mongoose.connect ("mongodb+srv://leandroperdona:n0WT2C6cvHCcsE9P@leandroperdona.xxwtuq7.mongodb.net/?retryWrites=true&w=majority&appName=leandroperdona")

//check database connected or not

connect.then (() => {
    console.log("Database connected Successfully")
})

.catch(() => {
    console.log ("Database cannot be connected")
})

//Create a Schema 
const LoginSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: true 
    },
    password: {
        type:String,
        required: true
    }
})
//Create model (colection part)
const collection = new mongoose.model ("users" , LoginSchema )

module.exports = collection