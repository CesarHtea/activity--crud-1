import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'

import './App.css';

import UsersTable from './components/UsersTable'
import User from './components/User'
import NewUser from './components/NewUser'

class App extends Component {
  render() {
    return (
    	<Switch>
          <Route exact path='/' component={ UsersTable } />
          <Route exact path='/new' component={ NewUser } />
          <Route path='/user/:id' component={ User } />
    	</Switch>      
    );
  }
}

export default App;
