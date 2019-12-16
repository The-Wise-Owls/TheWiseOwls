const request = require('supertest');
const server = require('../server');

describe('Admin Features', function() {
  const path = require('path');
  const { exec } = require('child_process');
  const { user, password } = require('./database/config.js');

  beforeEach(function(done) {
    // Create and load database
    const schema = path.join(__dirname, 'database', 'schema.sql');
    const seed = path.join(__dirname, 'database', 'seed.sql');
    exec(`mysql -u ${user} -p${password} < ${schema}`, (err) => {
      if (err) {
        done(err);
      }
      exec(`mysql -u ${user} -p${password} thewiseowls < ${seed}`, (err) => {
        if (err) {
          done(err);
        }
        done();
      });
    });
  });

  describe('View current classes', function() {
    it('When a valid administrator\'s email is provided, expect all currently active courses to be shown', function(done) {
      request(server)
        .get('/admin/kk@galvanize.com/classes')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({
          "name": "Kim Kost",
          "classes": [{"id": 1, "course": "HRATX 45"}, {"id": 2, "course": "HRATX 46"}, {"id": 3, "course": "MCSP 02"}, {"id": 4, "course": "MCSP 03"}]
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
    
    it('When an invalid email is provided, expect an error', function(done) {
      request(server)
      .get('/admin/test@galvanize.com/classes')
      .expect(403)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });

  describe('View active classes without any parameters', function() {
    it('Expect all currently active courses to be shown', function(done) {
      request(server)
        .get('/admin/classes')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({
          "classes": [{"id": 1, "course": "HRATX 45"}, {"id": 2, "course": "HRATX 46"}, {"id": 3, "course": "MCSP 02"}, {"id": 4, "course": "MCSP 03"}]
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe('View all staff associated with a course', function() {
    it('When a valid class ID is provided, expect all staff associated with class to be shown', function(done) {
      request(server)
        .get('/admin/classes/1/staff')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(
          [{"id": 5, "name": "Arohan Dutt"}, {"id": 6, "name": "Keenan Johns"}, {"id": 7, "name": "Jonathan Keane"}, {"id": 8, "name": "Rob Peschke"}, {"id": 9, "name": "Taylor George"}, {"id": 10, "name": "Kim Kost"}, {"id": 11, "name": "Nik Mentakis"}, {"id": 12, "name": "Zubair Desai"}]
        )
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('When an invalid class ID is provided, expect an error', function(done) {
      request(server)
        .get('/admin/classes/5/staff')
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe('View all students enrolled in a selected cohort', function() {
    it('When a valid class ID is provided, expect all students in cohort to be shown', function(done) {
      request(server)
        .get('/admin/classes/4/students')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(
          [{"id": 29, "name": "Milo Castaneda"}, {"id": 30, "name": "Aaron Evans"}, {"id": 31, "name": "Laura Evans"}, {"id": 32, "name": "Poli Gonzalez"}, {"id": 33, "name": "Ellis Griffin"}, {"id": 34, "name": "Emery Mitchell"}, {"id": 35, "name": "Martin Ramos"}, {"id": 36, "name": "Zach Yusuf"}]
        )
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('When an invalid class ID is provided, expect an error', function(done) {
      request(server)
        .get('/admin/classes/5/students')
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
});