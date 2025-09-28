import React from 'react'

const EditDelete = () => {
  return (
    <div className="overflow-x-auto p-4">
        <table className="min-w-full border-collapse border-2 border-purple-900">
        <thead className="bg-purple-300 text-purple-900">
          <tr>
            <th className="border border-purple-900 px-4 py-2">Name</th>
            <th className="border border-purple-900 px-4 py-2">ID</th>
            <th className="border border-purple-900 px-4 py-2">Department</th>
            <th className="border border-purple-900 px-4 py-2">Year</th>
            <th className="border border-purple-900 px-4 py-2">DOB</th>
            <th className="border border-purple-900 px-4 py-2">Father's Name</th>
            <th className="border border-purple-900 px-4 py-2">Mother's Name</th>
            <th className="border border-purple-900 px-4 py-2">Gender</th>
            <th className="border border-purple-900 px-4 py-2">Email ID</th>
            <th className="border border-purple-900 px-4 py-2">Phone Number</th>
            <th className="border border-purple-900 px-4 py-2">Address</th>
            <th className="border border-purple-900 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black text-semibold font-sans">
            <tr className='min-w-full border-collapse border border-purple-500'>
                <td className="border border-purple-900 px-4 py-2 text-center">Gayathri K</td>
                <td className="border border-purple-900 px-4 py-2 text-center">11122213014</td>
                <td className="border border-purple-900 px-4 py-2 text-center">BCA</td>
                <td className="border border-purple-900 px-4 py-2 text-center">III</td>
                <td className="border border-purple-900 px-4 py-2 text-center">02:06:2005</td>
                <td className="border border-purple-900 px-4 py-2 text-center">Kumar B</td>
                <td className="border border-purple-900 px-4 py-2 text-center">ArulMozhi K</td>
                <td className="border border-purple-900 px-4 py-2 text-center">Female</td>
                <td className="border border-purple-900 px-4 py-2 text-center">gayathri5611416@gmail.com</td>
                <td className="border border-purple-900 px-4 py-2 text-center">9791990163</td>
                <td className="border border-purple-900 px-4 py-2 text-center">732/4, South Street, Aadur Agaram , Kurinjipadi, Cuddalore.</td>
                <td className="border border-purple-900 px-4 py-2 text-center">
                    <button className='bg-green-400 text-white font-bold px-5 py-2 rounded-[15px] m-5 cursor-pointer hover:bg-green-300'>Edit</button>
                    <button className='bg-red-400 text-white font-bold px-5 py-2 rounded-[15px] m-5 cursor-pointer hover:bg-red-300'>Delete</button>
                </td>
            </tr>
            
            
        </tbody>
        </table>


        

    </div>
  )
}

export default EditDelete