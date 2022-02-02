import React from 'react';
import PropTypes from 'prop-types';

function Search({ searchValue, setSearchValue }) {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Search;
