import React, { Component } from 'react';
import './App.css';

import CardComponent from './components/CardComponent';
import ToggleColor from './components/ToggleColor';
import ShowHideContentComponent from './components/ShowHideContentComponent';
import UserListComponent from './components/UserListComponent';
import AddRemoveUser from './components/AddRemoveUser';

// Handles the view - Update the app each time the state changes
// Also handles the logic to add and remove a user from userList
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userList: ['hello', 'my', 'name', 'is', 'bubba']
    }
  }

  /*
  * Handles input from AddRemoveUser component
  * Takes the input from AddRemoveUser component and concat the state.userList
  * with the input to a new array
  * Sets state.userList to the "updated" list
  */
  updateUserList = (newList) => {
    let newUserList = this.state.userList.concat([newList]);
    this.setState({userList: newUserList});
  }

  /*
  * Takes an the hardcoded input from AddRemoveUser component and use it to remove user from list
  * Takes the input and use it in the slice method to make a copy of the array
  * And remove one user from the list
  * Takes the new list and updated the state.userList
  */
  poppedList = (pop) => {
    let poppedList = this.state.userList.slice(pop);
    this.setState({userList: poppedList});
  }

  render() {
    return (
      <div className="App">
        <CardComponent>
          <ShowHideContentComponent>
            <ToggleColor>
              <UserListComponent newListFromApp={this.state.userList}/>
            </ToggleColor>
          </ShowHideContentComponent>
        </CardComponent>

        <CardComponent>
          <ShowHideContentComponent>
           <AddRemoveUser updateUserList={this.updateUserList} newListFromApp={this.state.userList} poppedList={this.poppedList}/>
          </ShowHideContentComponent>
        </CardComponent>

      </div>
    );
  }
}

export default App;
