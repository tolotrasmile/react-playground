import * as React from 'react'

export default class NameForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.input.value)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type='text' name='username' ref={node => (this.input = node)}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
