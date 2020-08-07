import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import Grid from '@material-ui/core/Grid';


class Project extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.PreviousStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
            <form noValidate autoComplete="on">
                <div>
                    <Button
                        variant="contained"
                        component="label"
                        >
                        Upload Project picture
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>
                </div>
                <TextField
                    required
                    // id="outlined-required"
                    label="Title"
                    defaultValue='title'
                    variant="outlined"
                    
                />
                <TextField
                    required
                    // id="outlined-required"
                    label="Technologies used"
                    defaultValue='technologies_used'
                    variant="outlined"
                    
                />
                <br />
                <TextField
                    id="standard-multiline-static"
                    label="Description"
                    multiline
                    variant="outlined"
                    rows={4}
                    defaultValue='description'
                    
                />
                <br/>
  
                
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <GitHubIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Github Link"  defaultValue={values.skills}
                    onChange={handleChange('skills')} />
                    </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <HttpIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Website Link" />
                    </Grid>
                    </Grid>
                

                <div>
                    <Button variant="contained" color="secondary" style={styles.button} onClick={this.back}>
                        Previous
                    </Button>
                    <Button variant="contained" color="primary" style={styles.button} onClick={this.continue}>
                        continue
                    </Button>
                </div>
            </form>
                            
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default Project;

// picture: String,
//     title: String,
//     technologies_used: String,
//     description: String,
//     githubrepourl: String,
//     sitelink: String,
