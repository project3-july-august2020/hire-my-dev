import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, IconButton, Collapse, Chip , Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactMarkdown from 'react-markdown/with-html';
import './Job.css';
import actions from '../../services';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 805,
      margin: 5
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

function Job({ job, favoriteJob, load }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    const handleSubmit = () => {
      actions.favoriteJob(job).then(user => {
          console.log(user); 
          setDisabled(true)
      }).catch(( response ) => console.error(response));
  }

  const handleDelete = () => {
    actions.deleteJob(job._id)
    load() 
}

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    console.log(job)
    return (
      
        <Card className={classes.root}>
            <CardContent>
            <div className="job_card">
                <div className ="job_title">
                    <strong>{job.title}</strong> - {job.company}
                </div>
                <img className='job_image' alt={job.company} src={job.company_logo} />
                <Typography variant="body2" color="textSecondary" component="p" className ="Chips">
                    {new Date(job.created_at).toLocaleDateString()}
                 </Typography>
                 <div className ="Chips">
                 <Chip size="small" label={job.type} color="primary" className ="Chip"/>
                 <Chip size="small" label={job.location} color="primary" />
                 </div>
                 {/* <div className ="markdown"> */}
                 <div className='markdown' dangerouslySetInnerHTML={{ __html: job.how_to_apply}} />
                    {/* <ReactMarkdown source={job.how_to_apply} /> */}
                 {/* </div> */}
                 
            </div> 
            </CardContent>
            <CardActions disableSpacing>
            {!favoriteJob ? (
                <IconButton aria-label="add to favorites"
                  disabled={disabled}
                  onClick={handleSubmit}
                  >
                      <FavoriteIcon />
                  </IconButton>
              ):(
                <IconButton aria-label="Delete from favorites"
                onClick={handleDelete}
                >
                    <DeleteIcon/>
                </IconButton>
              )
            }
                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Job description:</Typography>
                <Typography paragraph>
                    <ReactMarkdown source={job.description} escapeHtml={false}/>
                </Typography>
                </CardContent>
            </Collapse> 
        </Card>
    );
}

export default Job;




