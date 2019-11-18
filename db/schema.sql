DROP DATABASE IF EXISTS thewiseowls;

CREATE DATABASE thewiseowls;

USE thewiseowls;

CREATE TABLE staff (
  staff_id INT AUTO_INCREMENT,
  fullName VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  automate TINYINT(1) DEFAULT 1,
  findRoom TINYINT(1) DEFAULT 1,
  PRIMARY KEY(staff_id)
);