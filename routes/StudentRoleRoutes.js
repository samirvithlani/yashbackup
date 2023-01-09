const express = require('express');
const router = express.Router();
const studentRoleController = require('../controller/StudentRoleController');
router.post('/create',studentRoleController.createStudentRole);


module.exports = router;