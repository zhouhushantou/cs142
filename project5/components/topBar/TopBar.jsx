import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userId } = this.props.match.params
    let topBarText = ''
    if (userId) {
      topBarText = window.cs142models.userModel(userId).first_name + ' ' +
        window.cs142models.userModel(userId).last_name
    }

    return (
      <AppBar className="cs142-topbar-appBar" position="absolute" >
        <Toolbar>
          <Typography variant="h5" color="inherit" style={{ marginRight: 1000 }}>
            Xiangxian Zhou
          </Typography>

          <Typography variant="h5" color="inherit">
            {topBarText}
          </Typography>
        </Toolbar>

      </AppBar >
    );
  }
}

export default TopBar;
