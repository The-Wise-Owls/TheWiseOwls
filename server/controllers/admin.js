const moment = require('moment');
const { getActiveClasses, getClassesByEmail, getStaffByClassID, getStudentsByClassID } = require('../models/admin.js');
const { getTentativeSchedule } = require('../utils');

exports.getActiveClasses = (req, res) => {
  getActiveClasses()
    .then(rows => {
      if (rows.length === 0) {
        res.status(403).send('Unable to fetch active classes');
      } else {
        const classes = [];
        rows.map(row => {
          // Add leading 0 for single-digit cohorts
          row.cohort < 10 ? row.cohort = `0${row.cohort}` : row.cohort;
          classes.push({
            id: row.class_id,
            course: `${row.name} ${row.cohort}`
          });
        });
        const cohorts = {
          name: rows[0].fullName,
          classes: classes
        };
        res.status(200).send(cohorts);
      }
    })
    .catch(err => res.status(500).send('Error'));
};

exports.getClasses = (req, res) => {
  const email = req.params.email;

  getClassesByEmail(email)
    .then(rows => Promise.all(rows))
    .then(rows => {
      if (rows.length === 0) {
        res.status(403).send('Invalid email address');
      } else {
        const classes = [];
        rows.map(row => {
          // Add leading 0 for single-digit cohorts
          row.cohort < 10 ? row.cohort = `0${row.cohort}` : row.cohort;
          classes.push({
            id: row.class_id,
            course: `${row.name} ${row.cohort}`
          });
        });
        const cohorts = {
          name: rows[0].fullName,
          classes: classes
        };
        res.status(200).send(cohorts);
      }
    })
    .catch(err => res.status(500).send('Error'));
};

exports.getStaff = async (req, res) => {
  const classID = req.params.classID;

  getStaffByClassID(classID)
    .then(rows => {
      if (rows.length === 0) {
        res.status(404).send('Class ID not associated with any instructional staff members');
      } else {
        const staff = [];
        rows.map(row => {
          const instructor = {
            id: row.staff_id,
            name: row.fullName
          };
          staff.push(instructor);
        });
        res.status(200).send(staff);
      }
    })
    .catch(err => res.status(500).send('Error'));
};

exports.getStudents = (req, res) => {
  const classID = req.params.classID;

  getStudentsByClassID(classID)
    .then(rows => Promise.all(rows))
    .then(rows => {
      if (rows.length === 0) {
        res.status(404).send('Class ID not associated with any cohorts');
      } else {
        const students = [];
        rows.map(row => {
          const student = {
            id: row.student_id,
            name: row.fullName
          };
          students.push(student);
        });
        res.status(200).send(students);
      }
    })
    .catch(err => res.status(500).send('Error'));
};

exports.scheduleOfficeHours = async (req, res) => {
  const classID = req.params.classID;
  const dateAssigned = moment().format('YYYY-MM-DD HH:mm:ss');
  const topic = req.params.topic;
  const pairs = JSON.parse(req.params.pairs);

  let tentativeSchedule = {
    classID: classID,
    date: moment().format('YYYY-MM-DD'),
    topic: topic,
    staff: []
  };

  getTentativeSchedule(dateAssigned, pairs, tentativeSchedule)
    .then(schedule => {
      res.status(201).send(schedule);
    })
    .catch(err => res.status(500).send('Error'));
};

exports.confirmOfficeHours = async (req, res) => {
  // To be implemented

  console.log('scheduled');
  res.status(201).end();
};
