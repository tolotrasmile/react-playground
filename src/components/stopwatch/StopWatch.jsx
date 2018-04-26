import React from 'react'

// Checkout https://egghead.io/lessons/react-use-component-state-with-react

class StopWatch extends React.Component {
  state = { lapse: 0, running: false, visible: true }

  handleRunClick = (event) => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse
        this.timer = setInterval(() => this.setState({ lapse: Date.now() - startTime}))
      }
      return { running: !state.running }
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  handleClearClick = (event) => {
    clearInterval(this.timer)
    this.setState({ lapse: 0, running: false })
  }

  toggle = (event) => {
    this.setState({ visible: event.target.checked, lapse: 0, running: false })
    clearInterval(this.timer)
  }

  render () {
    const buttonStyle = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 15,
      margin: 15,
      width: 100
    }

    return ( 
      <div style={{textAlign: 'center'}}>
        <label>Show stopwatch</label>
        <input type="checkbox" onChange={this.toggle} checked={this.state.visible}/>
        {this.state.visible && 
          <React.Fragment>
            <label style={{fontSize: '5em', display: 'block'}}>{this.state.lapse}ms</label>
            <button 
              onClick={this.handleRunClick}
              style={buttonStyle}>
                {this.state.running ? 'Stop': 'Start'}
            </button>
            <button  
              onClick={this.handleClearClick} 
              style={buttonStyle}>
                Clear
            </button>
          </React.Fragment>
        }
      </div>
    )
  }
}

export default StopWatch
