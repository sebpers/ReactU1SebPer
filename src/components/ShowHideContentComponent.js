import React, { Component } from 'react'

// Handle card toggle - true / false
class ShowHideContentComponent extends Component {

  constructor(props) {
    super(props);
    this.toggleWindow = this.toggleWindow.bind(this);

    // State of toggle window
    this.state = {
      toggleOnOff: true
    }
  }

  buttonStyle = {
    backgroundColor: '#20a5ac',
    width: 100,
    padding: 7,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    right: 30,
    borderRadius: 5,
    border: 'none'
  }

  // Change state True / False in this.state.toggleWindow.
  toggleWindow() {
    this.setState({ toggleOnOff: !this.state.toggleOnOff });
  }

  render() {

    return (
      <div>
        {/* Toggle children - Show / hide */}
        {this.state.toggleOnOff ? <div>{this.props.children}</div> : null}

        <button onClick={this.toggleWindow} style={this.buttonStyle}>
          Show content
        </button>
      </div>
    )
  }
}

export default ShowHideContentComponent