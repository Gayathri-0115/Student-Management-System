import React from 'react'
import StudentTable from '../Components/StudentTable'

const Display = ({ students }) => {
  return (
    <div>
        <StudentTable students={students}/>
    </div>
  )
}

export default Display