import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-4"
    >
      <label htmlFor="search-input" className="sr-only">Search songs</label>
      <div className="flex flex-row items-center border border-gray-300 rounded-xl bg-white/5 backdrop-blur-sm">
        <FiSearch className="w-6 h-6 ml-4 text-gray-300" />
        <input
          id="search-input"
          name="search-field"
          autoComplete="off"
          placeholder="What do you want to play?"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent outline-none placeholder-gray-500 text-base text-gray-300 p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
