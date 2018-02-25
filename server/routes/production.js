const router = require('express').Router();
const machineController = require('../controllers/machine');
const debug = require('debug')('router');

router.get('/machine-list', (req, res) => {
  debug(req.method, new Date());
  machineController.getAll(req, res);
});

router.post('/create-new-machine', (req, res) => {
  debug(req.method, new Date());
  machineController.createNewMachine(req, res);
});

router.get('/department-list', (req, res) => {
  debug(req.method, new Date());
  machineController.createNewMachine(req, res);
});


router.post('/create-department', (req, res) => {
  debug(req.method, new Date());
  machineController.createNewMachine(req, res);
});

module.exports = router;