const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;

//const monk = require('monk') 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import Routes directory
require('./routes')(app);

app.get('/', (req, res) => {
  res.send('PORT 9000');
});

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});
