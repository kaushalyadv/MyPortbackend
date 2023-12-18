// db.js
require('dotenv').config();
const mongoose = require('mongoose');


const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_MAIN_CH, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error.message);
  }
};

module.exports = connectToMongo;
