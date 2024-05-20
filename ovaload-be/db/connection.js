require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(mongoString)

const mongoString = process.env.DATABASE_URL
const database = mongoose.connection

database.on("error", (error)=>{
    console.log(error);
})

database.once("connected", ()=>{
    console.log("Database connected");
})

module.exports = database