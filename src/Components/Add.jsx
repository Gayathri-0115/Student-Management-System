import React from 'react'
import { useState } from 'react'

const Add = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "", id: "", department: "", year: "", dob: "",
    fatherName: "", motherName: "", gender: "",
    email: "", phone: "", address: "", admissionDate: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to backend
    const res = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const newStudent = await res.json();
    onAdd(newStudent); // update frontend table
    setFormData({
      name: "", id: "", department: "", year: "", dob: "",
      fatherName: "", motherName: "", gender: "",
      email: "", phone: "", address: "", admissionDate: ""
    });
  };


  return (
    <div className='font-sans flex flex-col justify-start items-center gap-10 m-10'>
      <h3 className='text-3xl text-purple-800 font-bold'>Student Details Form</h3>
      <div className='flex flex-col gap-5 w-1/2 p-10 bg-gradient-to-tl from-purple-300  to-purple-500 rounded-[25px] my-5'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5'>

          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-white font-bold text-[18px]'>Full Name</label>
            <input type="text" id='name' name="name" placeholder="Name" value={formData.name} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' autoComplete="name" />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="id" className='text-white font-bold text-[18px]'>Student ID</label>
            <input type="text" id='id' name="id" placeholder="ID" value={formData.id} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' autoComplete='off' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="department" className='text-white font-bold text-[18px]'>Choose Department</label>
            <select name="department" id='department' placeholder="Department" value={formData.department} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'>
              <option value="" disabled>
                -- Select Department --
              </option>
              <option value="BCA (Computer Application)">BCA (Computer Application)</option>
              <option value="B.A (Tamil)">B.A (Tamil)</option>
              <option value="B.A (English)">B.A (English)</option>
              <option value="B.Sc (Computer Science)">B.Sc (Computer Science)</option>
              <option value="B.Sc (Mathematics)">B.Sc (Mathematics)</option>
              <option value="B.Sc (Chemistry)">B.Sc (Chemistry)</option>
              <option value="B.Sc (Physics)">B.Sc (Physics)</option>
              <option value="B.Com (General)">B.Com (General)</option>
              <option value="B.Com (Computer Application)">B.Com (Computer Application)</option>
              <option value="B.Com (Accounting & Finance)">B.Com (Accounting & Finance)</option>
              <option value="BBA (Business Administration)">BBA (Business Administration)</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="year" className='text-white font-bold text-[18px]'>Year</label>
            <select name="year" id='year' placeholder="Year" value={formData.year} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'>
              <option value="" disabled>
                -- Select Year --
              </option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="dob" className='text-white font-bold text-[18px]'>Date Of Birth</label>
            <input type="date" id='dob' name="dob" value={formData.dob} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="fatherName" className='text-white font-bold text-[18px]'>Father's Name</label>
            <input type="text" id='fatherName' name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="motherName" className='text-white font-bold text-[18px]'>Mother's Name</label>
            <input type="text" id='motherName' name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>


          <div className='flex flex-col gap-2'>
            <label htmlFor="gender" className='text-white font-bold text-[18px]'>Choose Gender</label>
            <select name="gender" id='gender' value={formData.gender} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'>
              <option value="" disabled>
                -- Select Gender --
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-white font-bold text-[18px]'>Email ID</label>
            <input type="email" id='email' name="email" placeholder="Email" value={formData.email} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="phone" className='text-white font-bold text-[18px]'>Phone Number</label>
            <input type="number" id='phone' name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="address" className='text-white font-bold text-[18px]'>Address</label>
            <textarea name="address" id='address' placeholder="Address" value={formData.address} onChange={handleChange} className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'></textarea>
          </div>

          <div className='flex flex-col gap-2'>
            <button type="submit" className='w-full bg-purple-900 text-white font-bold text-[18px] p-2 rounded-[10px] cursor-pointer hover:bg-purple-700 my-5'>Add Student</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Add