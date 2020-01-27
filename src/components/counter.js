import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux';

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

const mapStateToProps = (state) => {
  return{
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
  return{
    inc,
    dec,
    rnd: () => {
      const payload = Math.ceil(Math.random() * 10);
     rnd(payload)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);