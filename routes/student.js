const express = require('express');
const router = express.Router();

const {  getAllStudent, 
    addStudent, 
    getStudent, 
    updateStudent, 
    deleteStudent 
} = require("../controllers/student")

router.route("/student").get(getAllStudent).post(addStudent); 
router.route("/student/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);


module.exports = router;