const MachineModel = require('../models/machine');

const createNewMachine = (req, res) => {
  const body = req.body;

  const newMachine = new MachineModel(body);

  newMachine.save()
    .then(savedMachine => {
      res.json({
        status: 200,
        message: 'success'
      })
    })
    .catch(err => {
      res.send(err.message)
    })
};

const getAll = (req, res) => {
  MachineModel.list()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    })
};

module.exports = {
  getAll,
  createNewMachine
};