import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';

import AddFigures from './AddFigures';

const useStyles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPapper: {
    width: 240,
  },
});

const AppDrawer = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.drawerPapper }}
      className={classes.drawer}
    >
      <Toolbar />
      <AddFigures />
    </Drawer>
  );
};

export default AppDrawer;
