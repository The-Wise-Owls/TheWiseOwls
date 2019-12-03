const { getClassesByEmail } = require('../models/admin.js');

exports.getClasses = (req, res) => {
  const email = req.params.email;

  getClassesByEmail(email)
    .then(rows => Promise.all(rows))
    .then(rows => {
      if (rows.length === 0) {
        res.status(403).send('Invalid email address')
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