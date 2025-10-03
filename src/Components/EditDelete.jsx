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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Edit Student</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(editForm).map((field) =>
                field !== "_id" ? (
                  <input
                    key={field}
                    type="text"
                    name={field}
                    value={editForm[field] || ""}
                    onChange={handleChange}
                    className="border p-2"
                    placeholder={field}
                  />
                ) : null
              )}
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button onClick={() => setEditingStudent(null)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
              <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default EditDelete