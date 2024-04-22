// SearchFilter.js
import React, { useState } from 'react';

function SearchFilter({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit"><a href="https://api.github.com/users/Finellaa/repos">Search</a></button>
    </form>
  );
}

export default SearchFilter;
