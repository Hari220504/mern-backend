const TraineesModel = require('../models/trainees-models');

// READ all trainees
async function readAllTrainees(req, res) {
  try {
    const trainees = await TraineesModel.find({});
    res.json(trainees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// READ a specific trainee (by name and/or email)
async function readATrainee(req, res) {
  try {
    const { name, email } = req.query;
    const filter = {};
    if (name) filter.name = name;
    if (email) filter.email = email;

    const trainee = await TraineesModel.find(filter);
    if (trainee.length > 0) {
      res.json(trainee);
    } else {
      res.json({ message: "No Trainee Found!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ADD a new trainee
async function addATrainee(req, res) {
  try {
    const traineeExists = await TraineesModel.findOne({ email: req.body.email });
    if (traineeExists) {
      return res.json({ message: "Trainee Already Exists!" });
    }

    const trainee = new TraineesModel(req.body);
    await trainee.save();
    res.json({ message: "Trainee Added Successfully!" });
  } catch (err) {
    const errorList = [];
    if (err.errors) {
      for (let temp in err.errors) {
        errorList.push(err.errors[temp].message);
      }
    }
    res.status(400).json({ errors: errorList });
  }
}

// UPDATE trainee
async function updateATrainee(req, res) {
  try {
    const result = await TraineesModel.updateOne(
      { email: req.body.email },
      { $set: req.body }
    );

    if (result.modifiedCount > 0) {
      res.json({ message: "Trainee Updated Successfully!" });
    } else {
      res.json({ message: "No Trainee Found or No Changes Detected!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// DELETE trainee
async function deleteATrainee(req, res) {
  try {
    const result = await TraineesModel.deleteOne({ email: req.body.email });
    if (result.deletedCount > 0) {
      res.json({ message: "Trainee Deleted Successfully!" });
    } else {
      res.json({ message: "Unable to Delete Trainee!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  readAllTrainees,
  readATrainee,
  addATrainee,
  updateATrainee,
  deleteATrainee,
};
