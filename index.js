const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conn = require('./db');

// const {connectToMongoDB} = require('./db');

const app = express();

conn.connectToMongoDB();


app.use(cors({
  origin: "*"   // Or your frontend domain
}));



app.use(express.json());

const traineesRoute = require('./routes/trainees-route')


app.use('/api/v1/trainees', traineesRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server connected on port ${process.env.PORT}!!!`);
});




