import React, { useState } from "react";
import "../styles/AddStudent.css"; 
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { store } from '../store'; 
import { toast } from "react-toastify";

const AddStudent = ({}) => {
    const { inputValues, currentUpdateStudent } = useSelector((state) => state.globalValues)
    const  dispatch = useDispatch();

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const url = "http://localhost:3000/api/v1/people";
        if(currentUpdateStudent === 0) {
            try{
              const response = await axios.post(url, inputValues);
              store.dispatch(changeStatusListener());
              store.dispatch(resetInputVlaues());
              toast.success("Student added to the application")
            } catch (error) {
              toast.error(error.message)
            }
        } else {
            try {
              const response = await axois.patch(`http://localhost:3000/api/v1/people/${currentUpdateStudent}`, inputValues);
              store.dispatch(changeCurrentUpdateStudent({id: 0}))
              store.dispatch(resetInputValues()); 
              toast.success("Student successfully updated! Please refresh to see the changes.");
            } catch (error) { 
                toast.error(error.message);
             }

        }
    }; 
    return ( 
        <div className="add-student-main">
           <h1 className="app-title">Student Application</h1>
            <form className="add-student-form" onSubmit={handleSubmit}>
              <input 
                className="form-input"
                type="text" 
                name="name"
                placeholder="Enter StudentName"
                value={inputValues.name}
                onChnage={(e) => dispatch(updateNameInputValue({ name: e.target.value}))}
                />
              
              <input 
                className="form-input"
                type="number" 
                name="phoneNumber"
                placeholder="Enter StudentName"
                value={inputValues.phoneNumber}
                onChnage={(e) => dispatch(updatePhoneNumberInputValue({ phoneNumber: e.target.value}))}
                />
               <input
                 className="form-input"
                 type="email"
                 name="email"
                 placeholder="Enter student's email"
                 value={inputValues.email}
                 onChange={(e) => dispatch(updateEmailInputValue({ email: e.target.value }))}
        />
        <input
                 className="form-input"
                 type="hobbies"
                 name="hobbies"
                 placeholder="Enter student's hobbies"
                 value={inputValues.hobbies}
                 onChange={(e) => dispatch(updateHobbiesInputValue({ email: e.target.value }))}
        />

        {currentUpdateStudent === 0 ? ( 
           <input className="form-submit" type="submit" value="Add student" />

        ) : ( 
         <input type="submit" value="update Student" className="form-submit" />
        )}
            </form>
        </div>
    );
};

export default AddStudent;