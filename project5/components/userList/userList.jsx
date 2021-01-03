import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
  from '@material-ui/core';
import './userList.css';
import { HashRouter } from 'react-router-dom';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    //console.log(window.cs142models.userListModel()) 
  }

  render() {
    return (
      <div>
        <List component="nav">
          {window.cs142models.userListModel().map(user => {
            return (
              <React.Fragment>
                <ListItem button component="a" href={"photo-share.html#/users/" + user._id}>
                  <ListItemText primary={user.first_name + ' ' + user.last_name} />
                </ListItem>
                <Divider />
              </React.Fragment>
            )
          })}
        </List>

      </div>
    );
  }
}

export default UserList;
