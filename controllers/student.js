const Student = require("../models/Student"); 

const getAllStudent = async (req,res) => {
    const student = await Student.find({});
    res.status(200).json({ student, count: student.length });
};

const addStudent  = async (req,res) => {
    const student = await Student.create(req.body); 
    res.status(201).json({ student });
}

const getStudent = async(req,res) => {
    const  { id: studentID } = req.params

    const student = await Student.findOne({
        _id: studentID
    }); 

    if(!student) {
        res.status(404).json({ msg: `Student with ${studentID}`})
    }
    return res.status(200).json({ student });
};


const updateStudent  = async (req,res) => {
    const { 
        body: {name, email, phoneNumber, hobbies},
        params: { id: studentID}, 
    } = req

    if (name == '' || email === '' || phoneNumber === '' || hobbies === '') {
        return res.status(400).json({ msg: ' Error Please add values to all fields"request error. plz fill'})
    }

    const student = await Student.findByIdAndUpdate ( 
        { _id: studentID }, 
        req.body, 
        { new: true, runValidators: true}
    );
    if (!student) {
        res.status(404).json({ msg: `student with ${studentId}`});
    }

    return res.status(200).json({ student})
};

const deleteStudent  = async (req,res) => {
  const {
    params: {id: studentID}
  } = req;
  
  const student = await Student.findOneAndDelete({ _id: studentID });
  if (!student) {
    return res.status(404).json({ msg : ` No student with is ${id} found`})
  }
  res.status(200).send();
};

module.exports = {
    getAllStudent, 
    addStudent, 
    getStudent, 
    updateStudent, 
    deleteStudent
}

