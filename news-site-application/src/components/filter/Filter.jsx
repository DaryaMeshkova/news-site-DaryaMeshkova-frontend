import React, { useState, useEffect } from 'react';

‍function Filter({setFilterValue}) {
  const [setFilterBarValue, setStateFilterValue] = useState({
    data:[],
    author:"",
    tags:""});
  

  const handleChange = (e) => {
    setStateFilterValue(news.filter((value) => value.title.includes(searchBarValue))),
    [searchBarValue],
  );
  useEffect(
  );
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

Filter.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
};

export default Filter;
