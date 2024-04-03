import { useState } from "react";
import { AddStudent, StudentList } from "./components";
import { ToastContainer, toast } from 'react-toastify';

function App() { 
  const [ currentUpdateStudent, setCurrentUpdateStudent] = useState(0);
  return ( 
    <div className="container-main">
      <AddStudent currentUpdateStudent={currentUpdateStudent} setCurrentUpdateStudent={setCurrentUpdateStudent}/>
      <StudentList currentUpdateStudent={currentUpdateStudent} setCurrentUpdateStudent={setCurrentUpdateStudent}/>
      <ToastContainer postion="top-center"/>
    </div>
  )
}
export default App
