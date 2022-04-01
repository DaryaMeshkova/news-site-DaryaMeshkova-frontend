import  React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addNews } from '../../redux/actionsCreator';
import { useDispatch } from 'react-redux';
import SelectTag from '../selectTag/selectTag';


export default function AddNewsModal({setTitle, setAuthor, setNewText, title, author, newText}) {
  const [open, setOpen] = useState(false);
  const [tag, setTags]= useState()
 const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createNews = () => {
    setOpen(false);
      dispatch(addNews({title, newText, author, tag}))
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
            placeholder='Title'
            autoFocus
            margin="dense"
            value={title}
            onChange={(event) => { setTitle(event.target.value) }}
            fullWidth
            variant="standard"
          />
          <TextField
            placeholder='Author'
            autoFocus
            margin="dense"
            value={author}
            onChange={(event) => { setAuthor(event.target.value) }}
            fullWidth
            variant="standard"
          />
            <TextField
            placeholder='text'
            autoFocus
            margin="dense"
            value={newText}
            onChange={(event) => { setNewText(event.target.value) }}
            fullWidth
            variant="standard"
          />
            <SelectTag tag={tag} setTags={setTags}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createNews}>Create news</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}