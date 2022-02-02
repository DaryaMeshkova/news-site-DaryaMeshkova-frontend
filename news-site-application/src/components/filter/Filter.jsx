import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

import { FILTER_NEWS_ALL, FILTER_NEWS_TAGS, FILTER_NEWS_AUTHOR } from '../../constants';

function Filter({ filterValue, setFilterValue }) {
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          filter
        </InputLabel>
        <NativeSelect
          onChange={handleChange}
          defaultValue={filterValue}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={FILTER_NEWS_ALL}>All</option>
          <option value={FILTER_NEWS_AUTHOR}>Author</option>
          <option value={FILTER_NEWS_TAGS}>Tags</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}

Filter.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
