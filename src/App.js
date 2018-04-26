import React from 'react'
import NameForm from './components/form/NameForm'
import Header from './components/header/Header'
import Tilt from './components/tilt/Tilt'
import StopWatch from './components/stopwatch/StopWatch';

const App = (props) => {
  return (
    <React.Fragment>
      <StopWatch laps={0} running={false} />
    </React.Fragment>
  )
}

export default App
