import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

import { ALL, TAGS, AUTHOR } from '../constants';

function Filter({ filterValue, SetFilterValue }) {
  const handleChange = (event) => {
    SetFilterValue(event.target.value);
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
          <option value={ALL}>All</option>
          <option value={AUTHOR}>Author</option>
          <option value={TAGS}>Tags</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}

Filter.propTypes = {
  SetFilterValue: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
