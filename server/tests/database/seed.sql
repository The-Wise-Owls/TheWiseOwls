-- Populate staff table
INSERT INTO staff (fullName, email) VALUES ('Julia Kim', 'jk@galvanize.com');
INSERT INTO staff (fullName, email) VALUES ('Jeff Salinas', 'js@galvanize.com');
INSERT INTO staff (fullName, email) VALUES ('Whitney Lee', 'wl@galvanize.com');
INSERT INTO staff (fullName, email) VALUES ('Arohan Dutt', 'ad@galvanize.com');
INSERT INTO staff (fullName, email) VALUES ('Kim Kost', 'kk@galvanize.com');
INSERT INTO staff (fullName, email) VALUES ('Nik Mentakis', 'nm@galvanize.com');
INSERT INTO staff (fullName, email) VALUES ('Zubair Desai', 'zd@galvanize.com');

-- Populate programs table
INSERT INTO programs (name) VALUES ('HRATX');
INSERT INTO programs (name) VALUES ('MCSP');

-- Populate classes table
INSERT INTO classes (program, cohort) VALUES (1, 44);
INSERT INTO classes (program, cohort) VALUES (1, 45);
INSERT INTO classes (program, cohort) VALUES (2, 2);
INSERT INTO classes (program, cohort) VALUES (2, 3);

-- Populate students table
INSERT INTO students (fullName, email, class) VALUES ('Gbenga Olu', 'go@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Herman W', 'hw@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Julius Fry', 'jf@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Bob Bob', 'bb@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Alice Alice', 'aa@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Happy Happy', 'hh@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('John Conolly', 'jc@gmail.com', 2);
INSERT INTO students (fullName, email, class) VALUES ('Mark Mark', 'mm@gmail.com', 2);
INSERT INTO students (fullName, email, class) VALUES ('Martin Ramos', 'mr@gmail.com', 2);
INSERT INTO students (fullName, email, class) VALUES ('Zach Zach', 'zz@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Pony Pony', 'pp@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Help Me', 'hm@gmail.com', 1);

-- Populate staff_availability table
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (1, '14:30', '17:00', 1);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (2, '14:00', '17:00', 1);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (3, '16:00', '17:00', 1);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (4, '14:00', '17:00', 1);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (1, '14:00', '17:00', 2);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (2, '14:00', '17:00', 2);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (3, '14:00', '17:00', 2);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (4, '15:00', '17:00', 2);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (1, '10:00', '12:30', 3);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (2, '10:00', '12:30', 3);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (3, '10:00', '12:30', 3);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (4, '10:00', '12:30', 3);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (4, '13:00', '14:30', 3);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (1, '10:00', '12:30', 4);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (2, '10:00', '12:30', 4);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (3, '10:00', '12:30', 4);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (4, '10:00', '12:30', 4);
INSERT INTO staff_availability (day, start, end, staff_id) VALUES (4, '13:00', '14:30', 4);

-- Populate staff_programs table
INSERT INTO staff_programs (staff_id, program_id) VALUES (1, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (2, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (3, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (4, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (5, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (5, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (6, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (6, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (7, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (7, 2);

-- Populate office_hours table
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 1, '2019-11-18', '2019-11-19', '14:00:00', '14:30:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 3, '2019-11-18', '2019-11-20', '16:30:00', '17:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (2, 2, '2019-11-18', '2019-11-20', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (2, 4, '2019-11-18', '2019-11-21', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (3, 7, '2019-11-18', '2019-11-21', '10:30:00', '11:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (4, 8, '2019-11-18', '2019-11-22', '12:00:00', '12:30:00', 'this', 0, 1);