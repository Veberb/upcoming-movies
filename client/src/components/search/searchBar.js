import React, { useState, useEffect } from 'react';
import './searchBar.css';
import useDebounce from '../../hooks/debounce';

function SearchBar({ onChangeTitle }) {
  const [title, setTitle] = useState('');

  const debouncedSearchTitle = useDebounce(title, 2500);

  useEffect(() => {
    if (debouncedSearchTitle) onChangeTitle(title);
  }, [debouncedSearchTitle]);

  return (
    <div className="ui segment">
      <div className="ui icon input ">
        <input
          type="text"
          className="search-input"
          onChange={event => {
            setTitle(event.target.value);
          }}
          placeholder="Search..."
        />
        <i className="circular search link icon"></i>
      </div>
    </div>
  );
}

export default SearchBar;
