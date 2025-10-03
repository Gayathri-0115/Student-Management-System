import React from 'react'
import EditDelete from '../Components/EditDelete'

const EditDel = ({ students, deleteStudent, updateStudent }) => {
  return (
    <div>
        <EditDelete  students={students}
        onDelete={deleteStudent}
        onUpdate={updateStudent}/>
    </div>
  )
}

export default EditDel