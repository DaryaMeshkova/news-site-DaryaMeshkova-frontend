import React from 'react';
import PropTypes from 'prop-types';

function NewItem({ title, text, author }) {
  // const { title, text, author } = data;
  return (
    <div data-testid="news">
      <h4 data-testid="author">{author}</h4>
      <h4 data-testid="title">{title}</h4>
      <div data-testid="text">
        {' '}
        {text}
      </div>
    </div>
  );
}

NewItem.propTypes = {


      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,


};

export default (NewItem);
