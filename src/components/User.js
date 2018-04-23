import React, { Component } from 'react'

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

class User extends Component {
  render() {
    return (
      <Card style={style}>
        <CardHeader
          title="John Smith"
          subtitle="ID: 1"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        />
        <CardMedia
          overlay={<CardTitle title="John Smith" subtitle="ID: 1" />}
        >
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" alt="" />
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
