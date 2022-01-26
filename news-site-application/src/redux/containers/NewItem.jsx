import React from 'react';
import PropTypes from 'prop-types';

function NewItem({ data }) {
  const { title, text, author } = data;
  return (
    <div>
      <h1>{author}</h1>
      <h4>{title}</h4>
      <div>
        {' '}
        {text}
      </div>
    </div>
  );
}

NewItem.propTypes = {
  data: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.number.isRequired,
    },
  ).isRequired,
};

export default (NewItem);
