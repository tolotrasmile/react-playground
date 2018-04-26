import React from 'react'
import NameForm from './components/form/NameForm'
import Header from './components/header/Header'
import Tilt from './components/tilt/Tilt'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <NameForm />
      <Tilt />
    </React.Fragment>
  )
}

export default App
