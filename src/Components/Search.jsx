import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-5 mx-50 my-5 p-5 rounded-[25px]'>
       <input className='w-200 p-2 bg-purple-400 rounded-[10px] placeholder:text-white text-white font-semibold border-purple-700 border-2' type="text" placeholder='Search Student by their ID' />

       <button className='px-3.5 py-3 border-purple-700 border-2 rounded-[25px] text-purple-900 font-semibold cursor-pointer hover:bg-purple-500 hover:text-white'><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default Search