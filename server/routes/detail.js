const router = require('express').Router();
const detailController = require('../controllers/detail');

router.post('/create-detail', (req, res) => {
  detailController.createNewProject(req, res);
});

// todo temp remove after testing
router.get('/get-task/:id', (req, res) => {
  detailController.getTask(req, res);
});

module.exports = router;
