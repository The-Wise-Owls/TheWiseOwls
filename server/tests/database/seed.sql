USE thewiseowls;

-- Populate staff table
INSERT INTO staff (fullName, email, calendar_id) VALUES ('Kim Kost', 'kk@galvanize.com', 'vqvu790o8mi8pv8p1l7ktuqri0@group.calendar.google.com');
INSERT INTO staff (fullName, email, calendar_id) VALUES ('Nik Mentakis', 'nm@galvanize.com', 'ihfri81hb0rqmv1251e5d9p6fo@group.calendar.google.com');
INSERT INTO staff (fullName, email, calendar_id) VALUES ('Zubair Desai', 'zd@galvanize.com', '960gkrepu7kl87kk7se2mmq5sk@group.calendar.google.com');
INSERT INTO staff (fullName, email, calendar_id) VALUES ('Emily Hilliard', 'emily.hilliard@galvanize.com', 'vlj0rl3jglul44v7bpav6ahdrc@group.calendar.google.com');
INSERT INTO staff (fullName, email, calendar_id) VALUES ('Linden Kueck', 'linden.kueck@galvanize.com', 'bro4uc85jalbmboebp5o5tfl54@group.calendar.google.com');
-- INSERT INTO staff (fullName, email, calendar_id) VALUES ('Mario Morales', 'mario.morales@galvanize.com', '');
-- INSERT INTO staff (fullName, email, calendar_id) VALUES ('Tye Macon', 'tye.macon@galvanize.com', '');
-- INSERT INTO staff (fullName, email, calendar_id) VALUES ('Keenan Johns', 'keenan.johns@galvanize.com', '');
-- INSERT INTO staff (fullName, email, calendar_id) VALUES ('Jonathan Keane', 'jonathan.keane@galvanize.com', '');
-- INSERT INTO staff (fullName, email, calendar_id) VALUES ('Rob Peschke', 'robert.peschke@galvanize.com', '');
-- INSERT INTO staff (fullName, email, calendar_id) VALUES ('Taylor George', 'taylor.george@galvanize.com', '');

-- Populate campuses
INSERT INTO campuses (campus_name, email, calendar_id) VALUES ('ATX', 'thewiseowls.galvanize@gmail.com', 'primary');

-- Populate programs table
INSERT INTO programs (name, campus) VALUES ('HRATX', 1);
INSERT INTO programs (name, campus) VALUES ('MCSP', 1);

-- Populate classes table
INSERT INTO classes (program, cohort) VALUES (1, 45);
INSERT INTO classes (program, cohort) VALUES (1, 46);
INSERT INTO classes (program, cohort) VALUES (2, 2);
INSERT INTO classes (program, cohort) VALUES (2, 3);

-- Populate students table
INSERT INTO students (fullName, email, class) VALUES ('Gabriel Anderson', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Tom Chandler', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Jonathan Diaz', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Bruce Ferguson', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Mark Fuechec', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Benjamin Hong', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Sam Lawson', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Matt Lucas', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Natalia Malesa', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Kytra Murphree', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Tim Sanderson', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('David Silva', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Collin Snyder', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Ish Tahir', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Alyssa Wadley', 'jeff.salinas.js@gmail.com', 1);
INSERT INTO students (fullName, email, class) VALUES ('Marco Aliaga', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Angel Alvarado', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Shaun Carr', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Sujan Dahal', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('DJ Djinadou', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Ray Dunning', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Julius Fry', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Josh Halsey', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Franky Leyva', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Gbenga Olufemi', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Noah Smith', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Rodney Spears', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Herman Wambugu', 'jeff.salinas.js@gmail.com', 3);
INSERT INTO students (fullName, email, class) VALUES ('Milo Castaneda', 'jeff.salinas.js@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Aaron Evans', 'jeff.salinas.js@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Laura Evans', 'jeff.salinas.js@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Poli Gonzalez', 'jeff.salinas.js@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Ellis Griffin', 'jeff.salinas.js@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Emery Mitchell', 'jeff.salinas.js@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Martin Ramos', 'jeff.salinas.js@gmail.com', 4);
INSERT INTO students (fullName, email, class) VALUES ('Zach Yusuf', 'jeff.salinas.js@gmail.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Gabriel Anderson', 'gla.ander@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Tom Chandler', 'chandlertom71@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Jonathan Diaz', 'jcdiaz1201@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Bruce Ferguson', 'bruce.ferguson3@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Mark Fuechec', 'fuechec.mark@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Benjamin Hong', 'benjaminhong@live.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Sam Lawson', 'slawson355@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Matt Lucas', 'mattyshiloh23@gmail.com ', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Natalia Malesa', 'nmalesa@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Kytra Murphree', 'kytracupcake@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Tim Sanderson', 'twsand11@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('David Silva', 'davidsilva525@outlook.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Collin Snyder', 'collinjacobsnyder@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Ish Tahir', 'tahirismaeel@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Alyssa Wadley', 'wadley.alyssa@gmail.com', 1);
-- INSERT INTO students (fullName, email, class) VALUES ('Marco Aliaga', 'cerasta81@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Angel Alvarado', 'alvarado399061@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Shaun Carr', 'shauncarr2010@hotmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Sujan Dahal', 'dahalsujanusa@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('DJ Djinadou', 'nourenidjinadou@yahoo.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Ray Dunning', 'dunningray@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Julius Fry', 'fryjulius@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Josh Halsey', 'halseyjt@yahoo.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Franky Leyva', 'surefirefjl@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Gbenga Olufemi', 'Phemmylincon27@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Noah Smith', 'fortycreeek24@yahoo.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Rodney Spears', 'rodneyspears03@gmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Herman Wambugu', 'Hkw875@hotmail.com', 3);
-- INSERT INTO students (fullName, email, class) VALUES ('Milo Castaneda', 'milo.work.school@gmail.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Aaron Evans', 'aaronmevans14@gmail.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Laura Evans', 'lauraevans0218@gmail.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Poli Gonzalez', 'gonzalezpoli10@gmail.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Ellis Griffin', 'ellisjr.griffin@gmail.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Emery Mitchell', 'emery_m@yahoo.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Martin Ramos', 'ramosmartin.14.mr@gmail.com', 4);
-- INSERT INTO students (fullName, email, class) VALUES ('Zach Yusuf', 'zachyusuf@aol.com', 4);

-- Populate staff_programs table
INSERT INTO staff_programs (staff_id, program_id) VALUES (1, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (1, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (2, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (2, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (3, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (3, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (4, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (4, 2);
INSERT INTO staff_programs (staff_id, program_id) VALUES (5, 1);
INSERT INTO staff_programs (staff_id, program_id) VALUES (5, 2);

-- Populate office_hours table
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 29, '2019-12-16', '2019-12-17', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 30, '2019-12-16', '2019-12-17', '15:30:00', '16:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (1, 31, '2019-12-16', '2019-12-18', '16:00:00', '16:30:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (2, 31, '2019-11-18', '2019-11-20', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (2, 32, '2019-11-18', '2019-11-21', '14:30:00', '15:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (3, 33, '2019-11-18', '2019-11-21', '10:30:00', '11:00:00', 'this', 0, 1);
INSERT INTO office_hours (staff_id, student_id, date_assigned, date_scheduled, start, end, topic, requested, completed) VALUES (4, 34, '2019-11-18', '2019-11-22', '12:00:00', '12:30:00', 'this', 0, 1);