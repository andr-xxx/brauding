const router = require('express').Router();
const loginController = require('../controllers/login');

router.post('/', (req, res) => {
  loginController.authenticate(req, res);
});

router.post('/create-new-user', (req, res) => {
  loginController.createNewUser(req, res);
});

module.exports = router;