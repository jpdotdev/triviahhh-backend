const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/user')
const scoreRoutes = require('./routes/scores')

app.use(cors());
// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

//require routes
app.use("/user", userRoutes)
app.use("/scores", scoreRoutes)

// connect to Mongoose 
async function connect() {
    try{
        await mongoose.connect(process.env.MONGO_STRING)
    } catch(err) {
        console.error(err)
    }
}

connect()


const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express server is running on ${port}`)
})