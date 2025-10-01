import React, { useState, useEffect } from 'react'
import './App.css'
// import Navbar from './Components/Navbar'
// import Home from './Pages/Home'
// import AddDetails from './Pages/AddDetails'
// import EditDel from './Pages/EditDel'
// import Display from './Pages/Display'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentTable from './Components/StudentTable';
import Add from './Components/Add';


function App() {
  const [students, setStudents] = useState([]);

  // Fetch all students from backend
  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

   const addStudent = async (studentData) => {
    const res = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });
    const newStudent = await res.json();
    setStudents([...students, newStudent]); // update table immediately
  };

  // Delete student
  const deleteStudent = async (id) => {
    await fetch(`http://localhost:3000/students/${id}`, { method: "DELETE" });
    setStudents(students.filter((s) => s._id !== id));
  };

  // Update student
  const updateStudent = async (id, updatedData) => {
    const res = await fetch(`http://localhost:3000/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    const newStudent = await res.json();
    setStudents(students.map((s) => (s._id === id ? newStudent : s)));
  };

  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddDetails />} />
          <Route path='/display' element={<Display />} />
          <Route path='/editdelete' element={<EditDel />} />
        </Routes>
      </BrowserRouter> */}

       <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Student Details</h1>

      {/* Pass addStudent to form */}
      <Add onAdd={addStudent} />

      {/* Pass students + delete + update to table */}
      <StudentTable
        students={students}
        onDelete={deleteStudent}
        onUpdate={updateStudent}
      />
    </div>

    </>
  )
}

export default App
