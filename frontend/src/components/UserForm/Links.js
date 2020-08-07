import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Grid from '@material-ui/core/Grid';

class Links extends Component {

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
                
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LinkedInIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Linkedin Link"  defaultValue={values.linkedinurl}
                        onChange={handleChange('linkedinurl')} />
                    </Grid>
                </Grid>

                </div>
                
                <div>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                       <GitHubIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Github Link"  defaultValue={values.githublink}
                        onChange={handleChange('githublink')} />
                    </Grid>
                    </Grid>
                </div>
                
                <br/>
                    <Button variant="contained" color="secondary" style={styles.button} onClick={this.back}>
                        Previous
                    </Button>
                    <Button variant="contained" color="default" style={styles.button} onClick={this.continue}>
                        continue
                    </Button>
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


export default Links;

//linkedinurl: String,
//   email: String,
//   githublink: String,