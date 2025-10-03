import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query); // pass the entered ID back to parent
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mx-auto my-5 p-5 rounded-[25px] w-full max-w-lg">
      <input
        className="w-full md:w-80 p-2 bg-purple-400 rounded-[10px] placeholder:text-white text-white font-semibold border-purple-700 border-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Student by their ID"
      />

      <button
        onClick={handleSearch}
        className="px-3.5 py-3 border-purple-700 border-2 
rounded-[25px] text-purple-900 font-semibold cursor-pointer hover:bg-purple-500 hover:text-white"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Search;
