import React from 'react';

const checkText = (word) => {
  if (!word) return;
  const index = word.search(/: /);
  if (index !== -1) {
    return (
      <>
        {word.substring(0, index + 1)} <span>{word.substring(index + 1)}</span>
      </>
    );
  } else {
    return word;
  }
};

export default checkText;