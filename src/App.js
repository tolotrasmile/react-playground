import React from 'react'
import Counter from './components/Counter'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Counter index={0} />
      <Counter index={1} />
      <Counter index={2} />
    </div>
  )
}

export default App
