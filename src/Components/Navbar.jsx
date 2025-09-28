import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-gradient-to-r from-purple-700  to-purple-300 top-0 w-full sticky'>
        <div>
            <h2 className='text-white text-2xl font-bold font-serif'>Student Management System</h2>
        </div>
        <div>
            <ul className='flex gap-10 text-[18px] font-semibold text-purple-900 cursor-pointer justify-center items-center font-sans'>
                <a href="/">
                   <li className='px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]'>Home</li>
                </a>
               <a href="/add">
                <li className='px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]'>Add</li>
               </a>
               <a href="/display">
                 <li className='px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]'>Display</li>
               </a>
                <a href="/editdelete">
                  <li className='px-5 py-1 transition-colors duration-300 font-bold hover:bg-purple-500 hover:text-white rounded-[20px]'>Edit/Delete</li>
                </a>
               
            </ul>
        </div>
    </div>
  )
}

export default Navbar