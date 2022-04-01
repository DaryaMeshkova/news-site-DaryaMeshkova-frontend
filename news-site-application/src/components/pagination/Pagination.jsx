import  React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import {useSelector, useDispatch } from 'react-redux';
import { getNews} from '../../redux/actionsCreator';
import PropTypes from 'prop-types';


export default function BasicPagination({page, setPage}) {
const  {count}  = useSelector((state) => state.number);
const pageButton = Math.ceil(count/5)
const  dispatch = useDispatch()
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(getNews(value))
  };
  return (
      <Pagination boundaryCount={pageButton} count={pageButton} page={page} onChange={handleChange}  />
  );
}
BasicPagination.prototype ={
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
}