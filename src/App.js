import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UsersTable from './components/UsersTable'
import User from './components/User'
import NewUser from './components/NewUser'

class App extends Component {
  render() {
    return (
      <UsersTable />
    );
  }
}

export default App;
