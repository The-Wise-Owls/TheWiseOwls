const db = require('.');

exports.getActiveClasses = () => {
  const queryString = 'SELECT p.name, c.cohort, c.class_id FROM classes c INNER JOIN programs p ON c.program = p.program_id WHERE c.active = 1;';

  return db.query(queryString)
    .then(results => results)
    .catch(err => console.log(`Error querying database for classes: ${err}`));
};

exports.getAllCampusClassesByEmail = (email) => {
  const queryString = 'SELECT ca.campus_name, p.name, c.cohort, c.class_id FROM campuses ca INNER JOIN programs p ON ca.campus_id = p.campus INNER JOIN classes c ON p.program_id = c.program WHERE ca.email = ?;';

  return db.query(queryString, email)
    .then(results => results)
    .catch(err => console.log(`Error querying database for classes: ${err}`));
};

exports.getClassesByEmail = (email) => {
  const queryString = 'SELECT s.fullName, p.name, c.cohort, c.class_id FROM staff s INNER JOIN staff_programs sp USING (staff_id) INNER JOIN programs p USING (program_id) INNER JOIN classes c ON sp.program_id = c.program WHERE s.email = ?;';

  return db.query(queryString, email)
    .then(results => results)
    .catch(err => console.log(`Error querying database for classes: ${err}`));
};

exports.getStaffByClassID = (classID) => {
  const queryString = 'SELECT s.staff_id, s.fullName, s.calendar_id FROM staff s INNER JOIN staff_programs sp USING (staff_id) INNER JOIN programs p USING (program_id) INNER JOIN classes c ON p.program_id = c.program WHERE c.class_id = ? AND s.active = 1;';

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
  const queryString = 'SELECT day, start, end, event_id FROM staff_availability WHERE staff_id = ?;'; // AND day >= (DAYOFWEEK(?) - 1);';

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

exports.addStaffAvailability = (day, start, end, staff_id, event_id) => {
  const queryString = 'INSERT INTO staff_availability(day, start, end, staff_id, event_id) VALUES(?, ?, ?, ?, ?);';
  
  return db.query(queryString, [day, start, end, staff_id, event_id])
    .then(results => results)
    .catch(err => console.error(`Error posting availability to database: ${err}`));
};

exports.removeStaffAvailability = (staff_id) => {
  const queryString = 'DELETE FROM staff_availability WHERE staff_id = ?;';

  return db.query(queryString, staff_id)
    .then(results => results)
    .catch(err => console.error(`Error deleting old availability from database: ${err}`));
};