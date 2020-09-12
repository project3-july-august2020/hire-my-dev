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
            <div className="form-container">
                    <h1 className="mb-5">Your Social Links</h1>
                    <div className="form-group">
                        <label htmlFor='linkedinurl'><LinkedInIcon />Your LinkedIn url</label> 
                            <input type="text" className="form-control" name='linkedinurl' onChange={handleChange('linkedinurl')} value={values.linkedinurl} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='githublink'><GitHubIcon /> Your GitHub url</label> 
                            <input type="url" className="form-control" name='githublink' onChange={handleChange('githublink')} value={values.githublink} />
                    </div>
                <div className="button-div">
                <button className="btn btn-primary" onClick={this.back}>Return</button>

                <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
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
