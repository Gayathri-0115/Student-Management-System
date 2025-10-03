import React, { useState, useEffect } from 'react'
import Search from '../Components/Search'
import StudentTable from '../Components/StudentTable'

const Home = ({ students }) => {
  const [filtered, setFiltered] = useState(students);

  useEffect(() => {
    setFiltered(students);
  }, [students]);

  const handleSearch = (id) => {
    if (!id) {
      setFiltered(students);
      return;
    }
    const result = students.filter((s) => s.id.toString() === id);
    setFiltered(result);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      <StudentTable students={filtered}
      />
    </div>
  )
}

export default Home