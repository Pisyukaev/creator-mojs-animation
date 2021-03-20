import React from 'react';
import { AppBar as MuiAppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const AppBar = (props) => {
  const classes = useStyles();

  return (
    <MuiAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Creator mojs animation
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
