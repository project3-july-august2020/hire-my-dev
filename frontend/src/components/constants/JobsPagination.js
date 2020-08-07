import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function JobsPagination(props) {
  const classes = useStyles();
  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log("line 18", value);
    props.setPage(value);
  };

  return (
    <div className={classes.root}>

      <Pagination count={10} page={props.page} onChange={handleChange} />
    </div>
  );
}
