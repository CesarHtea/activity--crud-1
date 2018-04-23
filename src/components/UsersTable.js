import React, { Component } from 'react'
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
      .get(`${API_URL}/api/users`)
      .then((data) => {
        this.setState({
          users: data.body.data
        })
      })


  }

  render() {
    console.log(this.state.users)
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
            
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John</TableRowColumn>
              <TableRowColumn>Smith</TableRowColumn>
              <TableRowColumn>
                <RaisedButton label="See details" />
              </TableRowColumn>
            </TableRow>

            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John</TableRowColumn>
              <TableRowColumn>Smith</TableRowColumn>
              <TableRowColumn>
                <RaisedButton label="See details" />
              </TableRowColumn>
            </TableRow>

            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John</TableRowColumn>
              <TableRowColumn>Smith</TableRowColumn>
              <TableRowColumn>
                <RaisedButton label="See details" />
              </TableRowColumn>
            </TableRow>

          </TableBody>
        </Table>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default UsersTable
