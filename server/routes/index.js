const router = require('express').Router();
const login = require('./login');
const machine = require('./production');
const project = require('./project');
const tests = require('./tests');

router.use('/login', login);
router.use('/production', machine);
router.use('/project', project);
router.use('/tests', tests);

module.exports = router;
