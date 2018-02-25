const router = require('express').Router();
const loginController = require('../controllers/login');

router.post('/sign-in', (req, res) => {
  loginController.authenticate(req, res);
});

router.post('/sign-up', (req, res) => {
  loginController.createNewUser(req, res);
});

module.exports = router;