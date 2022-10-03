const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://anshul-atlas-admin:anshul-atlas-admin@cluster0.doczlt0.mongodb.net/myData?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL, () => {
    console.log("Connected to database");
})

module.exports = mongoose