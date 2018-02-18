const router = require('express').Router();
const login = require('./login');
const machine = require('./machine');
const detail = require('./detail');

router.use('/login', login);
router.use('/machine', machine);
router.use('/detail', detail);

module.exports = router;
