import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Search({ setSearchValue }) {
  const news = useSelector((store) => store.newsPageReducer.news);
  const [searchBarValue, setSearchBarValue] = useState('');
  const handleChange = (e) => {
    setSearchBarValue(e.target.value);
  };
  useEffect(
    () => setSearchValue(news.filter((item) => item.title.includes(searchBarValue))),
    [searchBarValue],
  );

  return (
    <div>
      <input type="text" placeholder="Search" value={searchBarValue} onChange={handleChange} />
    </div>
  );
}

Search.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default Search;
