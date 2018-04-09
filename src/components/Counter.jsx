import React from 'react'
import { decrement, increment } from '../actions/counterAction'
import { connect } from 'react-redux'

const Counter = ({ index, counter, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{index} : {counter[index] || 0}</h1>
      <button onClick={() => onDecrement(index, 1)}>decrement</button>
      <button onClick={() => onIncrement(index, 1)}>increment</button>
    </div>
  )
}

const mapStateToProps = state => ({ counter: state.count })

const mapDispatchToProps = dispatch => ({
  onIncrement: (index, value) => dispatch(increment(index, value)),
  onDecrement: (index, value) => dispatch(decrement(index, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
