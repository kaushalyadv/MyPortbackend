require('dotenv').config();
const mongoose = require('mongoose');

const mongoURILINK = process.env.MONGO_URI_MAIN_CH; // Change to LOCAL_MONGO_URI

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURILINK);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error.message);
  }
};

module.exports = connectToMongo;
