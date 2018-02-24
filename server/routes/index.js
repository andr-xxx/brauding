const router = require('express').Router();
const login = require('./login');
const machine = require('./machine');
const project = require('./project');

router.use('/login', login);
router.use('/machine', machine);
router.use('/project', project);

module.exports = router;
