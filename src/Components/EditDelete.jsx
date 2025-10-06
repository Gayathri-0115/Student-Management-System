import React, { useState } from 'react'

const EditDelete = ({ students, onDelete, onUpdate }) => {
  const [editingStudent, setEditingStudent] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditClick = (student) => {
    setEditingStudent(student._id);
    setEditForm({ ...student });
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(editingStudent, editForm);
    setEditingStudent(null);
  };
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse border-2 border-purple-900">
        <thead className="bg-purple-300 text-purple-900">
          <tr>
            {[
              "Name", "ID", "Department", "Year", "DOB", "Father's Name", "Mother's Name",
              "Gender", "Email ID", "Phone Number", "Address", "Actions"
            ].map((col) => (
              <th key={col} className="border border-purple-900 px-4 py-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white text-black font-semibold font-sans">
          {students.map((s) => (
            <tr key={s._id} className='min-w-full border-collapse border border-purple-500'>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.name}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.id}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.department}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.year}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.dob}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.fatherName}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.motherName}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.gender}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.email}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.phone}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">{s.address}</td>
              <td className="border border-purple-900 px-4 py-2 text-center">
                <button onClick={() => handleEditClick(s)} className="bg-green-400 text-white font-bold px-5 py-2 rounded-[15px] m-5 cursor-pointer hover:bg-green-300">Edit</button>
                <button onClick={() => onDelete(s._id)} className="bg-red-400 text-white font-bold px-5 py-2 rounded-[15px] m-5 cursor-pointer hover:bg-red-300">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       {/* Edit Modal */}
      {editingStudent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Edit Student</h2>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.keys(editForm).map(
          (field) =>
            !["_id", "__v", "_v"].includes(field) && (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="text-sm font-semibold text-gray-700 mb-1 capitalize"
                >
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  id={field}
                  type="text"
                  name={field}
                  value={editForm[field] || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                />
              </div>
            )
        )}
      </form>

      <div className="flex flex-col sm:flex-row justify-end mt-6 gap-3 sticky bottom-0 bg-white py-2">
        <button
          onClick={() => setEditingStudent(null)}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

  
 
           

    </div>
  )
}

export default EditDelete