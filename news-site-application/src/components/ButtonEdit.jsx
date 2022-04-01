import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogContent } from '@mui/material';
import InputGhangeText from './InputChangeText';
import { useDispatch } from 'react-redux';
import { saveChange } from '../redux/actionsCreator';
import PropTypes from 'prop-types';

export default function ButtonEdit(id) {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const handleClose = () =>{
    setOpen(false)
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const savedChange = () => {
    dispatch(saveChange({text, id}),[dispatch])
    handleClose();
  }
  
  return (
    <>
      <Button variant="contained" color="success" onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <InputGhangeText
            text = {text}
            setText= {setText}
          
          />
          <Button variant="contained" color="success" onClick={savedChange}>Save</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

ButtonEdit.propTypes = {
  setText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
