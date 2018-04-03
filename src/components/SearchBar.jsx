import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { searchText: '', placeholder: 'Tapez un film...' }
  }

  render () {
    return (
      <div>
        <input value={this.state.searchText}
               onInput={(e) => this.handleChange(e)}
               placeholder={this.state.placeholder}/>
        <p>{this.state.searchText}</p>
      </div>
    )
  }

  handleChange (event) {
    this.setState({ searchText: event.target.value }, () => {
      console.log(this.state.searchText)
    })
  }
}

export default SearchBar
