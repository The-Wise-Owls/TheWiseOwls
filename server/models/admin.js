const db = require('.');

exports.getClassesByEmail = (email) => {
  const queryString = 'SELECT s.fullName, p.name, c.cohort, c.class_id FROM staff s INNER JOIN staff_programs sp USING (staff_id) INNER JOIN programs p USING (program_id) INNER JOIN classes c ON sp.program_id = c.program WHERE s.email = ?';

  return db.query(queryString, `${email}`)
    .then((results) => results)
    .catch(err => console.log(`Error querying database for classes: ${err}`));
};