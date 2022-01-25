import React from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../actions/action';

function Button() {
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(getNews);
  };

  return (
    <button type="button" onClick={handelClick}>
      Press to see news
    </button>
  );
}

export default Button;
