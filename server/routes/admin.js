const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.js');

router.get('/classes', adminController.getActiveClasses);
router.get('/:email/classes', adminController.getClasses);
router.get('/:email/allClasses', adminController.getAllClasses);
router.get('/programs/:email', adminController.getAllPrograms);
router.get('/classes/:classID/staff', adminController.getStaff);
router.get('/classes/:classID/students', adminController.getStudents);
router.get('/schedule/class/:class_name/class_id/:class_id/topic/:topic/:pairs', adminController.scheduleOfficeHours);
router.post('/:day/:start/:end/:staff_id/:event_id/availability', adminController.postStaffAvailability)
router.post('/confirm/:class_id/:staff_id/:student_id/:date_assigned/:date_scheduled/:start/:end/:topic/:requested', adminController.confirmOfficeHours);
router.post('/classes/:program/:cohort', adminController.addClass);
router.delete('/:staff_id/availability/remove', adminController.deleteStaffAvailability)

module.exports = router;