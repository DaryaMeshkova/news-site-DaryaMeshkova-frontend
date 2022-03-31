import  React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useSelector, useDispatch } from 'react-redux';
import { getNumber } from '../../redux/actionsCreator';


export default function BasicPagination() {
  const [page, setPage] = useState(1)
 const  dispatch = useDispatch()
// const count= useSelector((state) => state.news.count);
// const {count} = data
// console.log(data)
const pageButton = Math.ceil(11/5)
const changePage=()=>{
  dispatch(getNumber(page),[page])

}
  return (
    <Stack spacing={2}>
      <Pagination boundaryCount={pageButton} count={pageButton} onClick={changePage} >{page}</Pagination>
    </Stack>
  );
}