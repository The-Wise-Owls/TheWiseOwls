const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.js');

router.get('/classes', adminController.getActiveClasses);
router.get('/:email/classes', adminController.getClasses);
router.get('/:email/allClasses', adminController.getAllClasses);
router.get('/classes/:classID/staff', adminController.getStaff);
router.get('/classes/:classID/students', adminController.getStudents);
router.get('/schedule/class/:classID/topic/:topic/:pairs', adminController.scheduleOfficeHours);
router.post('/confirm/date/:date/class/:classID/topic/:topic/:pairs', adminController.confirmOfficeHours);
router.post('/:day/:start/:end/:staff_id/availability', adminController.postStaffAvailability)

module.exports = router;