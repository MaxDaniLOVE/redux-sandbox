import React from 'react';

const Counter = ({counter, dec, inc, rnd}) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button 
        id="dec"
        onClick={dec}
        className="btn btn-danger btn-large">DEC</button>
      <button 
        id="inc"
        onClick={inc}
        className="btn btn-success btn-large">INC</button>
      <button 
        id="rnd"
        onClick={rnd}
        className="btn btn-warning btn-large">RND</button>
    </div>
  )
}

export default Counter;