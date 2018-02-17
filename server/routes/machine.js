const router = require('express').Router();
const machineController = require('../controllers/machine');
const debug = require('debug')('router');

router.get('/', (req, res) => {
  debug(req.method, new Date());
  machineController.getAll(req, res);
});

router.post('/create-new-machine', (req, res) => {
  debug(req.method, new Date());
  machineController.createNewMachine(req, res);
});

module.exports = router;