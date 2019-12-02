const { exec } = require('child_process');
const path = require('path');
const assert = require('chai').assert;
const request = require('supertest');
const { user, password } = require('./database/config.js');

describe('Admin Features', function() {
  beforeEach(function(done) {
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
});