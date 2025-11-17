const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = async () => {
  try {  
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB Successfully!!");
  } catch (e) {
    console.log("MongoDB Connection Failed:", e.message);
  }
};

module.exports = { connectToMongoDB };







// const mongoose = require('mongoose');
// require('dotenv').config();

// function connectToMongoDB() {

//   mongoose.connect(process.env.MONGODB_URL)
//     .then(() => {
//       console.log("Connected to MongoDB Successfully. using then!!");
//     })

//     .catch((e) => {
//       console.log("MongoDB Connection Failed:", e.message);
//     });
// }

// module.exports = { connectToMongoDB };


