const router = require('express').Router();
const login = require('./login');
const machine = require('./machine');

router.use('/login', login);
router.use('/machine', machine);

module.exports = router;
