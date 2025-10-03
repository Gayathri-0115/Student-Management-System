import React from 'react'
import Add from '../Components/Add'

const AddDetails = ({ addStudent }) => {
  return (
    <div>
        <Add onAdd={addStudent}/>
    </div>
  )
}

export default AddDetails