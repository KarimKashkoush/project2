const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reportsSchema = new Schema({
    report: String,
    rays: String,
    analysis: String,
    Prescription: String
},
    { timestamps: true }, { _id: false });


const articleSchema = new Schema({
    fullName: String,
    nationalityId: Number,
    birthday: String,
    tele: Number,
    emergencyNumber1: Number,
    emergencyNumber2: Number,
    Country: String,
    email: String,
    job: String,
    healthy: String,
    reports: [reportsSchema],
},
    { timestamps: true }
)

// Create a model based on that schema
const User = mongoose.model("User", articleSchema);

// export the model
module.exports = User;