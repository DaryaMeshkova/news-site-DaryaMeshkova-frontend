import  React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Filter from '../filter/Filter';
import { addNews } from '../../redux/actionsCreator';
import { useDispatch } from 'react-redux';
import { FILTER_NEWS_ALL } from '../../constants';

export default function AddNewsModal(setTitle, setAuthor, setNewText, title, author, newText) {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue]= useState(FILTER_NEWS_ALL)
 const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createNews = () => {
    setOpen(false);
      dispatch(addNews(title, newText, author))
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>News</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={title}
            onChange={setTitle}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={author}
            onChange={setAuthor}
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            value={newText}
            onChange={setNewText}
            fullWidth
            variant="standard"
          />
          <Filter filterValue={filterValue} setFilterValue={setFilterValue}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createNews}>Create news</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}