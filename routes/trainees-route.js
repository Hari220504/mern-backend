const router = require('express').Router();

const TraineeController = require('../controllers/trainees-controller');

router.get('/readAllTrainees', TraineeController.readAllTrainees);
router.get('/readTrainee', TraineeController.readATrainee);
router.post('/addTrainee', TraineeController.addATrainee);
router.put('/updateTrainee', TraineeController.updateATrainee);
router.delete('/deleteTrainee', TraineeController.deleteATrainee);

module.exports = router;
