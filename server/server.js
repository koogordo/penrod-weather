const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const db = require('./server.conf.json').mongoUri;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// import routes
const location = require('./api/location');

// connect to mlab mongoDB
mongo
  .connect(process.env.PROD_MONGODB || db)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
  });

// Set static files
app.use(express.static(path.join(__dirname, '../dist/penrod-weather')));

// set routes to our mini api
app.use('/api/location', location);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//port and server listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
