import React from 'react';

function Square(props) {
  return (
    // Square receives value and the onClick function that are passed by the parent
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
