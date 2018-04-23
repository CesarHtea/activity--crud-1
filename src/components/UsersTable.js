import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'absolute',
  right: 20,
  bottom: 20
};

const API_URL = 'https://reqres.in'

class UsersTable extends Component {

  constructor() {
    super()
    
    this.state = {
      users: []
    }

  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/users?per_page=20`)
      .then((data) => {
        this.setState({
          users: data.body.data
        })
      })
  
  }

  render() {
    const users = this.state.users
    // console.log(users)
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            
            {users.map((user) => {
            // console.log(user)
            return (
              <TableRow>
                <TableRowColumn>{user.id}</TableRowColumn>
                <TableRowColumn>{user.first_name}</TableRowColumn>
                <TableRowColumn>{user.last_name}</TableRowColumn>
                <TableRowColumn>
                  <Link to={'/user/'+ user.id} >
                    <RaisedButton label="See details" />
                  </Link>
                </TableRowColumn>
              </TableRow>
            )

            })}
            
  
          </TableBody>
        </Table>

        <Link to='/new'> 
          <FloatingActionButton style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>

      </div>
    )
  }
}

export default UsersTable
