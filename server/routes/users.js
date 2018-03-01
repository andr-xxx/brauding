const router = require('express').Router();
const usersController = require('../controllers/users');

router.post('/sign-in', (req, res) => {
  usersController.authenticate(req, res);
});

router.post('/sign-up', (req, res) => {
  usersController.createNewUser(req, res);
});

router.get('/all', (req, res) => {
  usersController.getAll(req, res);
});

router.delete('/remove/:id', (req, res) => {
  usersController.remove(req, res);
});

module.exports = router;