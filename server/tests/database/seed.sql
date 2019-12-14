USE thewiseowls;

-- Populate staff table
INSERT INTO staff (fullName, email, instructor) VALUES ('Julia Kim', 'julia.kim@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Jeff Salinas', 'jeff.salinas@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Mario Morales', 'mario.morales@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Tye Macon', 'tye.macon@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Arohan Dutt', 'ad@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Keenan Johns', 'keenan.johns@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Jonathan Keane', 'jonathan.keane@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Rob Peschke', 'robert.peschke@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Taylor George', 'taylor.george@galvanize.com', 0);
INSERT INTO staff (fullName, email, instructor) VALUES ('Kim Kost', 'kk@galvanize.com', 1);
INSERT INTO staff (fullName, email, instructor) VALUES ('Nik Mentakis', 'nm@galvanize.com', 1);
INSERT INTO staff (fullName, email, instructor) VALUES ('Zubair Desai', 'zd@galvanize.com', 1);

-- Populate programs table
INSERT INTO programs (name) VALUES ('HRATX');
INSERT INTO programs (name) VALUES ('MCSP');

-- Populate classes table
INSERT INTO classes (program, cohort) VALUES (1, 45);
INSERT INTO classes (program, cohort) VALUES (1, 46);
INSERT INTO classes (program, cohort) VALUES (2, 2);
INSERT INTO classes (program, cohort) VALUES (2, 3);

-- Populate students table
INSERT INTO students (fullName, email, class) VALUES ('Gabriel Anderson', 'gla.ander@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Tom Chandler', 'chandlertom71@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Jonathan Diaz', 'jcdiaz1201@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Bruce Ferguson', 'bruce.ferguson3@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Mark Fuechec', 'fuechec.mark@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Benjamin Hong', 'benjaminhong@live.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Sam Lawson', 'slawson355@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Matt Lucas', 'mattyshiloh23@gmail.com ', 1);
INSERT INTO students (fullName, email, class) VALUES ('Natalia Malesa', 'nmalesa@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Kytra Murphree', 'kytracupcake@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Tim Sanderson', 'twsand11@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('David Silva', 'davidsilva525@outlook.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Collin Snyder', 'collinjacobsnyder@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Ish Tahir', 'tahirismaeel@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Alyssa Wadley', 'wadley.alyssa@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Marco Aliaga', 'cerasta81@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Angel Alvarado', 'alvarado399061@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Shaun Carr', 'shauncarr2010@hotmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Sujan Dahal', 'dahalsujanusa@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('DJ Djinadou', 'nourenidjinadou@yahoo.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Ray Dunning', 'dunningray@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Julius Fry', 'fryjulius@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Josh Halsey', 'halseyjt@yahoo.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Franky Leyva', 'surefirefjl@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Gbenga Olufemi', 'Phemmylincon27@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Noah Smith', 'fortycreeek24@yahoo.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Rodney Spears', 'rodneyspears03@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Herman Wambugu', 'Hkw875@hotmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Milo Castaneda', 'milo.work.school@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Aaron Evans', 'aaronmevans14@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Laura Evans', 'lauraevans0218@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Poli Gonzalez', 'gonzalezpoli10@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Ellis Griffin', 'ellisjr.griffin@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Emery Mitchell', 'emery_m@yahoo.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Martin Ramos', 'ramosmartin.14.mr@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Zach Yusuf', 'zachyusuf@aol.com', 4);

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
INSERT INTO staff_programs (staff_id, program_id) VALUES (6, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (7, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (8, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (9, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (10, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (10, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (11, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (11, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (12, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (12, 2);

-- Populate office_hours table
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 29, '2019-12-16', '2019-12-17', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 30, '2019-12-16', '2019-12-17', '15:30:00', '16:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 31, '2019-12-16', '2019-12-18', '16:00:00', '16:30:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (2, 31, '2019-11-18', '2019-11-20', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (2, 32, '2019-11-18', '2019-11-21', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (3, 33, '2019-11-18', '2019-11-21', '10:30:00', '11:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (4, 34, '2019-11-18', '2019-11-22', '12:00:00', '12:30:00', 'this', 0, 1);