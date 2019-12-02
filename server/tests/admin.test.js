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
        .expect([{"course": "HRATX 44"}, {"course": "HRATX 45"}, {"course": "MCSP 02"}, {"course": "MCSP 03"}])
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
});