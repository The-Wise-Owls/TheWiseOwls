const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.js');

router.get('/:email/classes', adminController.getClasses);

module.exports = router;