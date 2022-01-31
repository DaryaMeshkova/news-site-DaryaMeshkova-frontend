import React, { useState, useEffect } from 'react';

‍function Filter({setFilterValue}) {
  const [setFilterValue, setStateFilterValue] = useState('');
  value = { setFilterValue};
  const handleChange = (e) => {
    setSearchBarValue(e.target.value);
  };
  return (
    <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    filter
  </InputLabel>
  <NativeSelect
    defaultValue={all}
    inputProps={{
      name: 'filter',
      id: 'uncontrolled-native',
    }}
  >
    <option value={all}>All</option>
    <option value={author}>Author</option>
    <option value={tags}>Tags</option>
  </NativeSelect>
</FormControl>
  );
}
