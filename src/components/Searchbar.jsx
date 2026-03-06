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
      <div className="flex flex-row items-center border border-white/5 bg-surface-light/30 backdrop-blur-md rounded-full focus-within:border-primary focus-within:shadow-glow transition-all duration-300 max-w-2xl mt-2 mx-auto">
        <FiSearch className="w-5 h-5 ml-6 text-gray-400" />
        <input
          id="search-input"
          name="search-field"
          autoComplete="off"
          placeholder="Search for songs, artists, or albums..."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
