import React from 'react'
import { useState } from 'react'

const Add = () => {

  return (
    <div className='font-sans flex flex-col justify-start items-center gap-10 m-10'>
      <h3 className='text-3xl text-purple-800 font-bold'>Student Details Form</h3>
      <div className='flex flex-col gap-5 w-1/2 p-10 bg-gradient-to-tl from-purple-300  to-purple-500 rounded-[25px] my-5'>
        <form action="" className='flex flex-col gap-5'>

          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-white font-bold text-[18px]'>Full Name</label>
            <input type="text" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="id" className='text-white font-bold text-[18px]'>Student ID</label>
            <input type="number" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="dept" className='text-white font-bold text-[18px]'>Choose Department</label>
            <select name="" id="" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'>
              <option value="">BCA (Computer Application)</option>
              <option value="">B.A (Tamil)</option>
              <option value="">B.A (English)</option>
              <option value="">B.Sc (Computer Science)</option>
              <option value="">B.Sc (Mathematics)</option>
              <option value="">B.Sc (Chemistry)</option>
              <option value="">B.Sc (Physics)</option>
              <option value="">B.Com (General)</option>
              <option value="">B.Com (Computer Application)</option>
              <option value="">B.Com (Accounting & Finance)</option>
              <option value="">BBA (Business Administration)</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="year" className='text-white font-bold text-[18px]'>Year</label>
            <select name="" id="" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'>
              <option value="">I</option>
              <option value="">II</option>
              <option value="">III</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="dob" className='text-white font-bold text-[18px]'>Date Of Birth</label>
            <input type="date" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

            <div className='flex flex-col gap-2'>
            <label htmlFor="fathername" className='text-white font-bold text-[18px]'>Father's Name</label>
            <input type="text" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="mothername" className='text-white font-bold text-[18px]'>Mother's Name</label>
            <input type="text" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>


          <div className='flex flex-col gap-2'>
            <label htmlFor="gender" className='text-white font-bold text-[18px]'>Choose Gender</label>
            <select name="" id="" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'>
              <option value="">Female</option>
              <option value="">Male</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-white font-bold text-[18px]'>Email ID</label>
            <input type="email" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="phno" className='text-white font-bold text-[18px]'>Phone Number</label>
            <input type="number" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="address" className='text-white font-bold text-[18px]'>Address</label>
            <textarea name="" id="" className='bg-white p-1.5 rounded text-[17px] font-semibold text-purple-900'></textarea>
          </div>

          <div  className='flex flex-col gap-2'>
            <button className='w-full bg-purple-900 text-white font-bold text-[18px] p-2 rounded-[10px] cursor-pointer hover:bg-purple-700 my-5'>Add Student</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Add