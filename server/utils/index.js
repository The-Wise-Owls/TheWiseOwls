const moment = require('moment');
const { getAvailabilityByStaffID, getScheduleByStaffID } = require('../models/admin.js');

exports.getTentativeSchedule = async (dateAssigned, pairs, tentativeSchedule) => {
  for (var i = 0; i < pairs.length; i++) {
    const staffID = pairs[i].staff.id;
    const students = pairs[i].students;
    const staffAvailability = [];
    const singleInstructor = {
      id: staffID,
      name: pairs[i].staff.name,
      assignments: []
    };

    await getAvailabilityByStaffID(staffID)
      .then(rows => {
        rows.map(({ day, start, end }) => {
          const format = 'HH:mm:ss';

          // Convert availability to 30 minute intervals
          while (moment(start, format).isBefore(moment(end, format))) {
            staffAvailability.push({
              day: day,
              time: start,
              isBooked: false
            });
            start = moment(start, format).add(30, 'm').format(format);
          }
        });
      })
      .then(async () => {
        // Set isBooked to true for currently scheduled office hours
        await getScheduleByStaffID(staffID)
          .then(rows => {
            rows.forEach(({ day, start }) => {
              for (let i = 0; i < staffAvailability.length; i++) {
                if (day === staffAvailability[i].day && start === staffAvailability[i].time) {
                  staffAvailability[i].isBooked = true;
                  break;
                }
              }
            });
          })
          .then(() => {
            // Iterate through students in reverse and remove each student when paired with instructor
            for (let student = students.length - 1; student >= 0; student--) {
              for (let i = 0; i < staffAvailability.length; i++) {
                let day = staffAvailability[i].day;
                let time = staffAvailability[i].time;
                let isBooked = staffAvailability[i].isBooked;

                // Prevent consecutive assignments
                if (!isBooked && (!staffAvailability[i - 1] || !staffAvailability[i - 1].isBooked)) {
                  let scheduledDate;
                  // Convert day of week to number to calculate dateAssigned - this accounts for office hours scheduled for the following week
                  if (moment().day(day).format('d') - new Date(dateAssigned).getDay() < 0) {
                    scheduledDate = 7 + (moment().day(day).format('d') - new Date(dateAssigned).getDay());
                  } else {
                    scheduledDate = moment().day(day).format('d') - new Date(dateAssigned).getDay();
                  }

                  // Schedule on day of week and time after the time of request. For example, if requested on a Wednesday at 14:00, look for availability starting Wednesday after 14:00
                  if (`${day} ${time}` < moment().day()) {
                    continue;
                  } else {
                    singleInstructor.assignments.push({
                      id: students[student].id,
                      name: students[student].name,
                      dateAssigned: (moment(dateAssigned, 'YYYY-MM-DD')).add(scheduledDate, 'd').format('YYYY-MM-DD'),
                      timeAssigned: moment(time, 'h:mm a').format('h:mm a'),
                      time24Hour: time,
                      timeEnd: moment(time, 'HH:mm:ss').add(30, 'm').format('HH:mm:ss')
                    });
                    staffAvailability[i].isBooked = !isBooked;
                    students.pop();
                    break;
                  }
                }
              }
            }

            // Handles requests submitted on Friday, ensuring office hours are scheduled the following week
            if (students.length) {
              for (let student = students[students.length - 1]; student >= 0; student--) {
                for (let i = 0; i < staffAvailability.length; i++) {
                  let day = staffAvailability[i].day;
                  let time = staffAvailability[i].time;
                  let isBooked = staffAvailability[i].isBooked;
  
                  if (!isBooked && (!staffAvailability[i - 1] || !staffAvailability[i - 1].isBooked)) {
                    let scheduledDate;
                    if (moment().day(day).format('d') - new Date(dateAssigned).getDay() < 0) {
                      scheduledDate = 7 + (moment().day(day).format('d') - new Date(dateAssigned).getDay());
                    } else {
                      scheduledDate = moment().day(day).format('d') - new Date(dateAssigned).getDay();
                    }
  
                    singleInstructor.assignments.push({
                      id: students[student].id,
                      name: students[student].name,
                      dateAssigned: (moment(dateAssigned, 'YYYY-MM-DD')).add(scheduledDate, 'd').format('YYYY-MM-DD'),
                      timeAssigned: moment(time, 'h:mm a').format('h:mm a'),
                      time24Hour: time,
                      timeEnd: moment(time, 'HH:mm:ss').add(30, 'm').format('HH:mm:ss')
                    });
                    staffAvailability[i].isBooked = !isBooked;
                    students.pop();
                    break;
                  }
                }
              }
            }
            tentativeSchedule.staff.push(singleInstructor);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  return tentativeSchedule;
};