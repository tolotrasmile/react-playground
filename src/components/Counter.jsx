import React from 'react'
import { decrement, increment } from '../actions/counterAction'
import { connect } from 'react-redux'

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => onDecrement(1)}>decrement</button>
      <button onClick={() => onIncrement(1)}>increment</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: (value) => dispatch(increment(value)),
    onDecrement: (value) => dispatch(decrement(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
