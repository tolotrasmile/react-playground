// payload = {count: 1, index: 0}

const counterReducer = (counter = [0], action) => {
  switch (action.type) {
    case 'INCREMENT' : {
      const { index, count } = action.payload
      const value = counter[index] || 0
      return [ ...counter.slice(0, index), value + count, ...counter.slice(index + 1) ]
    }
    case 'DECREMENT' : {
      const { index, count } = action.payload
      const value = counter[index] || 0
      return [ ...counter.slice(0, index), value - count, ...counter.slice(index + 1) ]
    }
    case 'ADD_COUNTER' : {
      const { count } = action.payload
      return [...counter, count]
    }
    case 'REMOVE_COUNTER' : {
      const { index } = action.payload
      return [ ...counter.slice(0, index), ...counter.slice(index + 1) ]
    }
    default:
      return counter
  }
}

export default counterReducer
