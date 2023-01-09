const studentController = require('../controller/StudentController');
const express = require('express');
const router = express.Router();
router.post('/student',studentController.createStudent);
router.get('/student',studentController.getAllStudents)
router.get('/student1',studentController.getAllStudentswithrole)
router.get('/student/:id',studentController.getStudentById)
router.delete('/student/:id',studentController.deleteStudent)
router.put('/student/:id',studentController.updateStudent)
module.exports = router;