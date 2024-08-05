const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbconnect');
require('dotenv').config(); 
const route = require('./router');
const app = express();
const port = process.env.PORT || 3050;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnect();
route(app);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
