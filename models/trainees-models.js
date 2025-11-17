const mongoose = require('mongoose');

const traineeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the Trainee Name"]
  },
  email: {
    type: String,
    required: [true, "Please enter the Trainee Email"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"]
  },
  batch: {
    type: String,
    enum: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  },
  timings: String,
  year: {
    type: Number,
    min: [2000, "Year must be 2000 or later"],
    max: [2100, "Year must be 2100 or earlier"]
  },
  age: {
    type: Number,
    min: [18, "Age must be over 18 years!"]
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const TraineesModel = mongoose.model('Trainee', traineeSchema);
module.exports = TraineesModel;
