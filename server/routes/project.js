const router = require('express').Router();
const projectController = require('../controllers/project');

router.post('/create-project', (req, res) => {
  projectController.createNewProject(req, res);
});

router.get('/get-projects-list', (req, res) => {
  projectController.getProjectsList(req, res)
});

router.post('/update-operations-time', (req, res) => {
  projectController.updateProjectTime(req, res)
});

router.get('/details/:projectId', (req, res) => {
  projectController.getProjectDetail(req, res)
});

// todo temp remove after testing
router.get('/get-task/:id', (req, res) => {
  projectController.getTask(req, res);
});

module.exports = router;
