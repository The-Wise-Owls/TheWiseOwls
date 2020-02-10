DROP DATABASE IF EXISTS thewiseowls;

CREATE DATABASE thewiseowls;

USE thewiseowls;

CREATE TABLE staff (
  staff_id INT AUTO_INCREMENT,
  fullName VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL,
  active TINYINT DEFAULT 1,
  calendar_id VARCHAR(75) NOT NULL,
  PRIMARY KEY (staff_id)
);

CREATE TABLE campuses (
  campus_id INT AUTO_INCREMENT,
  campus_name VARCHAR(20) NOT NULL,
  email VARCHAR (40) NOT NULL,
  calendar_id VARCHAR(75) NOT NULL,
  PRIMARY KEY (campus_id)
);

CREATE TABLE programs (
  program_id INT AUTO_INCREMENT,
  name VARCHAR(12) NOT NULL,
  campus INT NOT NULL,
  PRIMARY KEY (program_id),
  FOREIGN KEY (campus)
    REFERENCES campuses (campus_id)
);

CREATE TABLE classes (
  class_id INT AUTO_INCREMENT,
  program INT NOT NULL,
  cohort INT NOT NULL,
  active TINYINT DEFAULT 1,
  PRIMARY KEY (class_id),
  FOREIGN KEY (program)
    REFERENCES programs (program_id)
);

CREATE TABLE students (
  student_id INT AUTO_INCREMENT,
  fullName VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  class INT NOT NULL,
  PRIMARY KEY (student_id),
  FOREIGN KEY (class)
    REFERENCES classes (class_id)
);

CREATE TABLE staff_availability (
  avail_id INT AUTO_INCREMENT,
  day TINYINT NOT NULL,
  start TIME NOT NULL,
  end TIME NOT NULL,
  staff_id INT NOT NULL,
  event_id VARCHAR (40) NOT NULL,
  PRIMARY KEY (avail_id),
  FOREIGN KEY (staff_id)
    REFERENCES staff (staff_id)
);

CREATE TABLE staff_programs (
  staffprogram_id INT AUTO_INCREMENT,
  staff_id INT NOT NULL,
  program_id INT NOT NULL,
  PRIMARY KEY (staffprogram_id),
  FOREIGN KEY (staff_id)
    REFERENCES staff (staff_id),
  FOREIGN KEY (program_id)
    REFERENCES programs (program_id)
);

CREATE TABLE office_hours (
  oh_id INT AUTO_INCREMENT,
  staff_id INT,
  student_id INT NOT NULL,
  date_assigned DATE NOT NULL,
  date_scheduled DATE NOT NULL,
  start TIME NOT NULL,
  end TIME NOT NULL,
  topic VARCHAR(255) NOT NULL,
  requested TINYINT DEFAULT 0,
  completed TINYINT DEFAULT 0,
  PRIMARY KEY (oh_id),
  FOREIGN KEY (student_id)
    REFERENCES students (student_id),
  FOREIGN KEY (staff_id)
    REFERENCES staff (staff_id)
);