import React from 'react';
import './searchBar.css';

function SearchBar({ movie }) {
  return (
    <div class="ui icon input">
      <input type="text" className="search-input" placeholder="Search..." />
      <i class="circular search link icon"></i>
    </div>
  );
}

export default SearchBar;
