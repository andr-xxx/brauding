const router = require('express').Router();
const detailController = require('../controllers/project');

router.post('/create-project', (req, res) => {
  detailController.createNewProject(req, res);
});

router.post('/update-operations-time', (req, res) => {
  detailController.updateProjectTime(req, res)
});

// todo temp remove after testing
router.get('/get-task/:id', (req, res) => {
  detailController.getTask(req, res);
});

module.exports = router;
