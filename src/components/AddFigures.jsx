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
}));

const AddFigures = () => {
  const classes = useStyles();

  return (
    <Accordion classes={classes}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Add figures
      </AccordionSummary>
      <AccordionDetails>
        <Button fullWidth>Rectangle</Button>
      </AccordionDetails>
      <AccordionDetails>
        <Button fullWidth>Circle</Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AddFigures;
