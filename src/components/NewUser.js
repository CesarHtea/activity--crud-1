import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  width: 400,
  border: '1px solid #EAEAEA',
  borderRadius: 5,
  margin: '0 auto',
  padding: 20
}

class NewUser extends Component {
  render() {
    return (
      <form style={style}>
        <h3>New User</h3>
        <div>
          <TextField
            hintText="i.e. John"
            floatingLabelText="Name"
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            hintText="i.e. Killer"
            floatingLabelText="Job"
            fullWidth={true}
          />
        </div>
        <RaisedButton type='submit' label="Create" primary={true} />
      </form>
    )
  }
}

export default NewUser
