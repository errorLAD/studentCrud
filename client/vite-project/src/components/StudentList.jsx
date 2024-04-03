import React, { useEffect, useState } from "react";
import axios from "axios";


import "../styles/StudentList.css";
import { changeStatusListener } from "../features/globalValues/globalSlice";
import { store } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {fetchStudent} from "../features/globalValues/globalSlice";
import { toast } from "react-toastify";

const url = "http://localhost:3000/api/v1/people";

const StudentList = () => {
    const [ student, setStudent] = useState([]);
    const { statusListener } = useSelector((state) => state.globalvalues)
    const dispatch = useDispatch();
    
    const fetch = async () =>  {
      try{
       //
       const response = await axios(url);
       const data = response.data;
       setPeople(data.people)
      } catch(error) {
       console.log(error)
      } 
    }

    const deleteStudent  = async() => {
      try{
        await axios.delete(`http://localhost:3000/api/v1/people/${id}`)
        store.dispatch(changeStatusListener());
        toast.success('student sucessfully delted');
      } catch(error) {
        toast.error(error.message); 
      }
    }

    const enterUpdateState = async (id) => {
        try{ 
           const response = awaitaxios(`http://localhost:3000/api/v1/people/${id}`);
           const data = await response.data;
           dispatch(fetchStudent(data))
        } catch(error) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        fetchData(url);
    }, [statusListener])

    return( 
     <div className="student-list-main"> 
     <ul> 
        { student.map(item => (
        <li key= {item._id}>
        <p>{ item.name }</p>
        <p>{ item.phoneNumber }</p>
        <p>{ item.email }</p>
        <p>{ item.hobbies }</p>

        <div className="student-list-btn-div"> 
           <button onClick={() => deleteStudent(item._id)}></button>
           <button onclick ={() => enterUpdateState(item._id)}> uPDATE</button>
        </div>





        </li>

        ))}
     </ul>
    
     </div>
    )
   

}
