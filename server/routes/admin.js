const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.js');

router.get('/:email/classes', adminController.getClasses);
router.get('/classes/:classID/students', adminController.getStudents);

module.exports = router;