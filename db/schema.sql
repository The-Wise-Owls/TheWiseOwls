DROP DATABASE IF EXISTS thewiseowls;

CREATE DATABASE thewiseowls;

USE thewiseowls;

CREATE TABLE staff (
  staff_id INT AUTO_INCREMENT,
  fullName VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  PRIMARY KEY (staff_id)
);

CREATE TABLE students (
  student_id INT AUTO_INCREMENT,
  fullName VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  program VARCHAR(12) NOT NULL,
  PRIMARY KEY (student_id)
);

CREATE TABLE staff_availability (
  avail_id INT AUTO_INCREMENT,
  day TINYINT(1) NOT NULL,
  start TIME NOT NULL,
  end TIME NOT NULL,
  staff_id INT NOT NULL,
  PRIMARY KEY (avail_id),
  FOREIGN KEY (staff_id)
    REFERENCES staff (staff_id)
);

CREATE TABLE office_hours (
  oh_id INT AUTO_INCREMENT,
  staff_id INT NOT NULL,
  student_id INT NOT NULL,
  date DATE NOT NULL,
  start TIME NOT NULL,
  end TIME NOT NULL,
  topic VARCHAR(255) NOT NULL
  requested TINYINT(1) DEFAULT 0,
  completed TINYINT(1) DEFAULT 0,
  PRIMARY KEY (oh_id),
  FOREIGN KEY (student_id)
    REFERENCES students (student_id),
  FOREIGN KEY (staff_id)
    REFERENCES staff (staff_id)
);