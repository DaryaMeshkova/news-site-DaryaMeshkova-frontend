import React from 'react';
import PropTypes from 'prop-types';

function NewItem({ data }) {
  const { title, text, author } = data;
  return (
    <>
      <h4>{author}</h4>
      <h4>{title}</h4>
      <div>
        {' '}
        {text}
      </div>
    </>
  );
}

NewItem.propTypes = {
  data: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default (NewItem);
