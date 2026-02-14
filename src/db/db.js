const mongoose = require('mongoose');

async function connectDB() {  
  await mongoose.connect('mongodb+srv://mern1:snehshish@mern1.p7se804.mongodb.net/mern1')
    console.log('Connected to MongoDB');  
}
module.exports = connectDB;


