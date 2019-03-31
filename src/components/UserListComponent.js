import React, { Component } from 'react'

// Handles user list - Render each user in the list
class UserListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  userListStyle = {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    width: 250,
    height: 230,
    overflowY: 'auto',
    margin: '0 auto'
  }

  ulStyle = {
    listStyleType: 'none'
  }

  liStyle = {
    width: '95%',
    border: '1px solid lightgrey',
    padding: 5,
    margin: '5px auto'
  }

  /* Puts each user from App.js to a new array as a list item */
  /* Render each user in a unordered list */
  render() {

    const newUserList = this.props.newListFromApp.map((user, i) => {
      return <li style={this.liStyle} key={i}>{user}</li>
    });

    return (
      <div>
        <div style={this.userListStyle}>
        <ul style={this.ulStyle}>
          {newUserList}
        </ul>
        </div>
      </div>
    )
  }
}

export default UserListComponent