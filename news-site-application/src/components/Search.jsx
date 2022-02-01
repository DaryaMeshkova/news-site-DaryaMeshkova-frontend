import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './filter/Filter';

import { ALL, TAGS, AUTHOR } from './constants';

function Search({ setSearchValue }) {
  const news = useSelector((store) => store.newsPageReducer.news);
  const [searchBarValue, setSearchBarValue] = useState('');
  const [filterValue, SetFilterValue] = useState('all');
  const handleChange = (event) => {
    setSearchBarValue(event.target.value);
  };

  useEffect(() => {
    if (filterValue === ALL) {
      setSearchValue(news.filter((item) => Object.values(item).some((items) => {
        const newsArrayToString = String(items);
        return newsArrayToString.toLowerCase().includes(searchBarValue);
      })));
    } if (filterValue === TAGS) {
      setSearchValue(news.filter((item) => item.tags.includes(searchBarValue)));
    } if (filterValue === AUTHOR) {
      setSearchValue(news.filter((item) => item.author.includes(searchBarValue)));
    }
  }, [searchBarValue, filterValue]);

  return (
    <div>
      <Filter filterValue={filterValue} SetFilterValue={SetFilterValue} />
      <input type="text" placeholder="Search" value={searchBarValue} onChange={handleChange} />
    </div>
  );
}

Search.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default Search;
