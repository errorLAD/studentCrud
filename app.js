require('express-async-errors'); 

const express = require('express');
const app = express();
const cors = require('cors'); 
const mongoose = require('mongoose');
const studentRouter = require('./routes/student');

app.use(express.json())
app.use(cors());

app.use("/api/v1", studentRouter);


const port = process.env.PORT || 3000;

const start = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/student_db')
        aap.listen(port, () => {
            console.log('server listening on PORT' + port)
        })

    } catch (error) { 
        console.log(error)
    }
}

start();
