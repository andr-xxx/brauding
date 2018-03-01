const router = require('express').Router();
const users = require('./users');
const machine = require('./production');
const project = require('./project');
const tests = require('./tests');

router.use('/users', users);
router.use('/production', machine);
router.use('/project', project);
router.use('/tests', tests);

module.exports = router;
