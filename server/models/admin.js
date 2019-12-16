const db = require('.');

exports.getClassesByEmail = (email) => {
  const queryString = 'SELECT s.fullName, p.name, c.cohort, c.class_id FROM staff s INNER JOIN staff_programs sp USING (staff_id) INNER JOIN programs p USING (program_id) INNER JOIN classes c ON sp.program_id = c.program WHERE s.email = ?;';

  return db.query(queryString, email)
    .then(results => results)
    .catch(err => console.log(`Error querying database for classes: ${err}`));
};

exports.getStaffByClassID = (classID) => {
  const queryString = 'SELECT s.staff_id, s.fullName FROM staff s INNER JOIN staff_programs sp USING (staff_id) INNER JOIN programs p USING (program_id) INNER JOIN classes c ON p.program_id = c.program WHERE c.class_id = ?;';

  return db.query(queryString, classID)
    .then(results => results)
    .catch(err => console.log(`Error querying database for staff: ${err}`));
};

exports.getStudentsByClassID = (classID) => {
  const queryString = 'SELECT student_id, fullName FROM students WHERE class = ?;';

  return db.query(queryString, classID)
    .then(results => results)
    .catch(err => console.log(`Error querying database for students: ${err}`));
};

exports.getAvailabilityByStaffID = (staffID) => {
  const queryString = 'SELECT day, start, end FROM staff_availability WHERE staff_id = ?;'; // AND day >= (DAYOFWEEK(?) - 1);';

  return db.query(queryString, staffID)
    .then(results => results)
    .catch(err => console.log(`Error querying database for availability: ${err}`));
};

exports.getScheduleByStaffID = (staffID) => {
  // Make day of week 0 indexed to be consistent with Moment.js
  const queryString = 'SELECT DAYOFWEEK(date_scheduled - 1) AS day, start, end FROM office_hours WHERE staff_id = ? AND date_scheduled >= CURDATE();';

  return db.query(queryString, staffID)
    .then(results => results)
    .catch(err => console.log(`Error querying database for schedule: ${err}`));
};