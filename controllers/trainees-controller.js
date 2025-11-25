const TraineesModel = require('../models/trainees-model');

// READ all trainees
async function readAllTrainees(req, res) {
  try {
    const trainees = await TraineesModel.find({});
    res.json(trainees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// READ a specific trainee (by name and email)
async function readATrainee(req, res) {
  try {
    const { name = "", email = "" } = req.body ?? {};
    const query = {};

     if (name) {
      query.name = { $regex: name, $options: "i" };  // case-insensitive
    }

    if (email) {
      query.email = { $regex: email, $options: "i" }; // case-insensitive
    }

    // if (name) query.name = name;
    // if (email) query.email = email;

    const trainees = await TraineesModel.find(query);

    res.json(trainees); // always return array
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
      res.json({ message: "Unable to update the Trainee!" });
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
      res.json({ message: "Unable to delete the Trainee!" });
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
  deleteATrainee
};

