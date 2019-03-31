import React, { Component } from 'react'

// Handle user color with toggle
class ToggleColor extends Component {

  constructor(props) {
    super(props);

    this.toggleUserColor = this.toggleUserColor.bind(this);

    this.state = {
      color: true
    }
  }

  buttonStyle = {
    backgroundColor: '#20a5ac',
    width: 200,
    padding: 7,
    color: 'whitesmoke',
    marginTop: 20,
    borderRadius: 5,
    border: 'none'
  }

  // Set state.color to True or False
  toggleUserColor() {
    this.setState({color: !this.state.color});
  }

  render() {
    return (
      <div>
        {/* Change user color to green or red depending on if the state.color is true or false */}
       {this.state.color ?
        <h4 style={{color: 'green'}}> {this.props.children} </h4>
        :
        <h4 style={{color: 'red'}}> {this.props.children} </h4>}

       {/* Call on function toggleUserColor to change state.color to true / false */}
        <button onClick={this.toggleUserColor} style={this.buttonStyle}>
          Toggle Color
        </button>
      </div>
    )
  }
}

export default ToggleColor