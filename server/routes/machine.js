const router = require('express').Router();
const machineController = require('../controllers/machine');

router.get('/', (req, res) => {
  machineController.getAll(req, res);
});

router.post('/create-new-machine', (req, res) => {
  machineController.createNewMachine(req, res);
});

module.exports = router;