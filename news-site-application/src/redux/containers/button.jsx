import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { getNews } from '../actions/action';

function Button() {
  const dispatch = useDispatch();
  return <button type="button" onClick={() => dispatch(getNews)}>Press to see news</button>;
}
const mapDispatchToProps = {
  getNews,
};
connect(null, mapDispatchToProps)(Button);
export default Button;
