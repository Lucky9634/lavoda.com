const mongoose = require("mongoose");

const dbConnect = () => {
    try {
        mongoose.connect("mongodb+srv://Muskan143:nidha%40143@kamal.mfzk3.mongodb.net/lavoda")
        console.log(`Your Data Base Has Connected...!`)

    } catch (error) {
        console.log("Something Went Wrong..!")

    }
}

module.exports = dbConnect