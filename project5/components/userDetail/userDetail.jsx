import React from 'react';
import {
  TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Paper, Button
} from '@material-ui/core';
import './userDetail.css';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userId } = this.props.match.params
    return (
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Item</TableCell>
                <TableCell align="center">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="center">{window.cs142models.userModel(userId)._id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">{window.cs142models.userModel(userId).first_name + ' ' +
                  window.cs142models.userModel(userId).last_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">{window.cs142models.userModel(userId).location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">{window.cs142models.userModel(userId).description}</TableCell>
              </TableRow>
            </TableBody>
          </Table >
        </TableContainer >

        <Button variant="contained" color="primary" style={{ marginLeft: 1000, marginTop: 30 }}
          href={"photo-share.html#/photos/" + window.cs142models.userModel(userId)._id}>
          Switch View
</Button>
      </div>
    );
  }
}

export default UserDetail;
