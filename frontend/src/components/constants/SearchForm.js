import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Checkbox, FormGroup, FormControlLabel }from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        display: 'flex',
        margin: theme.spacing(1),
        width: '55ch',
      },
    },
  }));

function SearchForm({ params, onParamChange }) {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormGroup row>
            <TextField id="standard-basic" label="Description"  onChange={onParamChange} 
                value={params.description} name= "description" type='text' variant="outlined" 
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
            />
            <TextField id="standard-basic" label="Location"  onChange={onParamChange} 
                value={params.location} name= "location" type='text' variant="outlined" 
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
            />
            <FormControlLabel
                control={
                <Checkbox
                    onChange={onParamChange}
                    name="full_time"
                    color="primary"
                    value={params.full_time}
                />
                }
                label="Only Full Time"
            />
            </FormGroup>
        </form>
    );
}

export default SearchForm;