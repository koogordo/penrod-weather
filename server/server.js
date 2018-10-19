const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongo = require('mongoose');

const db = require('./server.conf.json').mongoUri;
const app = express();


app.use(cors());
// import routes
const location = require('./api/location');
// connect to mlab mongoDB
mongo
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
  });



// set routes to our mini api
app.use('/api/location', location);

//port and server listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
