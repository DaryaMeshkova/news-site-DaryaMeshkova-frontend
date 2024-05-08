import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectTag({ tag, setTags }) {
  const  {tags} = useSelector((state) => state.tag);
  // console.log(tags)
  return (
    <Box sx={{ minWidth: 200 }} data-testid="tag">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        <Select
        
          labelId="demo-simple-select-label"
          value={tag}
          label="Rate"
          onChange={(event) => setTags(event.target.value)}
        >
          {tags.map((element) => (
            // console.log(element.name)
            <MenuItem key={element.id} value={element.name}>{element.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
SelectTag.propTypes = {
  tag: PropTypes.string.isRequired,
  setTags: PropTypes.func.isRequired,
}