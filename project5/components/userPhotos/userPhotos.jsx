import React from 'react';
import {
  Grid, Paper, GridListTile, TableContainer, Divider, GridList, Link, List,
  Table, TableCell, TableHead, TableRow, TableBody, Button, Typography, ListItem
} from '@material-ui/core';
import './userPhotos.css';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Grid container spacing={1} justify="center">
          {window.cs142models.photoOfUserModel(this.props.match.params.userId).map((item) => {
            return (
              <React.Fragment>
                <Grid container item xs={5} justify="center">
                  <GridListTile>
                    <img src={'./images/' + item.file_name} width="500px" />
                  </GridListTile>
                </Grid>
                <Grid container item xs={3} justify="center">
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
                          <TableCell align="center">Photo ID</TableCell>
                          <TableCell align="center">{item._id}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">Time</TableCell>
                          <TableCell align="center">{item.date_time}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">User ID</TableCell>
                          <TableCell align="center">{item.user_id}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">File Name</TableCell>
                          <TableCell align="center">{item.file_name}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table >
                  </TableContainer >
                </Grid>
                <Grid container item xs={4} justify="left">
                  <Typography variant="body1">
                    {item.comments ?
                      item.comments.map((comment) => {
                        return (
                          <React.Fragment>
                            <List>
                              <ListItem>
                                {comment.comment}
                              </ListItem>
                              <ListItem>
                                <Grid container xs={12}>
                                  <Grid item xs={5}>
                                    <Link href={"photo-share.html#/users/" + comment.user._id}>
                                      {comment.user.first_name + " " + comment.user.last_name}
                                    </Link>
                                  </Grid>
                                  <Grid item xs={7}>
                                    {comment.date_time}
                                  </Grid>
                                </Grid>
                              </ListItem>
                            </List>
                          </React.Fragment>
                        )
                      }) : "no comments"
                    }

                  </Typography>

                </Grid>
                <Divider />
              </React.Fragment>
            )
          })}

        </Grid >
      </div>
    );
  }
}

export default UserPhotos;
