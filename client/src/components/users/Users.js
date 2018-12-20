import React, { Component } from 'react';
import './users.css';

class Users extends Component {

  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('Customers fetched...', users)));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => 
            <li key={user.Student_ID}>{user.FName} {user.LName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Users;
