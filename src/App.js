import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBar from './components/AppBar';
import Drawer from './components/Drawer';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
  },
  appContent: {
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <AppBar />
      <Drawer />
      <div className={classes.appContent}>
        <Toolbar />
      </div>
    </div>
  );
}

export default App;
