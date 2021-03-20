import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
});

const AppDrawer = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.drawer }}
      className={classes.drawer}
    />
  );
};

export default AppDrawer;
