import React, { Component } from 'react'
import request from 'superagent'

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const style = {
  width: 300,
  margin: '0 auto',
  marginTop: 30
}

const API_URL = 'https://reqres.in'

class User extends Component {

    constructor() {
    super()
    
    this.state = {
      user: []
    }

  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/users/${this.props.match.params.id}`)
      .then((data) => {
        this.setState({
          user: data.body.data
        })
      })
  
  }

  render() {
    const user = this.state.user
    console.log(user)
    return (
      <Card style={style}>
        <CardHeader
          title={user.first_name + ' ' + user.last_name}
          subtitle={'ID:' + user.id}
          avatar={user.avatar}
        />
        <CardMedia
          overlay={<CardTitle title={user.first_name + ' ' + user.last_name} subtitle={'ID:' + user.id} />}
        >
          <img src={user.avatar} alt="" />
        </CardMedia>
        <CardTitle title="Web Developer" subtitle="4yrs" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    )
  }
}

export default User
