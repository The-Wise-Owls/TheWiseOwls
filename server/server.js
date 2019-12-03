const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const adminRouter = require('./routes/admin.js');

app.use(express.static('dist'));
app.use('/admin', adminRouter);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const server = app.listen(port, () => console.log(`Listening from port: ${port}`));

module.exports = server;