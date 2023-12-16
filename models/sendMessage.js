const mongoose = require('mongoose');
const { Schema } = mongoose;

const sendMessage = new Schema({
     name:{
        type: String,
        required: true

     },
     email:{
        type: String, 
        required: true,
        unique: true
     }, 
     message: {
        type: String, 
        required: true
     },
     date: {
        type: Date, 
        default: Date.now
     },

});
const Message = mongoose.model('Messages', sendMessage);
// User.createIndexes();

module.exports = Message;