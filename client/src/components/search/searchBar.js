import React from 'react';
import './searchBar.css';

const onFormSubmit = () => {
  console.log('oi');
};

function SearchBar({ movie }) {
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div class="ui icon input ">
          <input type="text" className="search-input" placeholder="Search..." />
          <i class="circular search link icon"></i>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
