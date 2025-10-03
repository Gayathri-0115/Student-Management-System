import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse border-2 border-purple-900">
        <thead className="bg-purple-300 text-purple-900">
          <tr>
            {[
              "Name", "ID", "Department", "Year", "DOB", 
              "Father's Name", "Mother's Name",
              "Gender", "Email ID", "Phone Number", "Address"
            ].map((col) => (
              <th key={col} className="border border-purple-900 px-4 py-2">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white text-black font-semibold font-sans">
          {students.map((s) => (
            <tr
              key={s._id}
              className="min-w-full border-collapse border border-purple-500"
            >
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
