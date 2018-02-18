const router = require('express').Router();
const detailController = require('../controllers/detail');

router.post('/create-detail', (req, res) => {
  detailController.createNewProject(req, res);
});

module.exports = router;
