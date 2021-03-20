import React from 'react';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},

  details: {
    padding: 0,
  },
}));

const AddFigures = () => {
  const classes = useStyles();

  return (
    <Accordion classes={{ root: classes.root, expanded: classes.expanded }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Add figures
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        <Button fullWidth>Rectangle</Button>
      </AccordionDetails>
      <AccordionDetails classes={{ root: classes.details }}>
        <Button fullWidth>Circle</Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AddFigures;
