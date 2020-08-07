import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="form-container">
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="username">Full name</label>
                    <input type="text" className="form-control" name="name" onChange={handleChange('username')} value={values.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Your Catch Phrase</label>
                    <input type="number" className="form-control" name="phone" onChange={handleChange('skills')} value={values.skills} />
                </div>
                <div className="form-group">
                    <label htmlFor="about">Short Bio About Yourself</label>
                    <textarea type="text" rows="4" className="form-control" name="about" onChange={handleChange('about')} value={values.about} />
                </div>
                <div className="form-group">
                    <label htmlFor="githublink"><GitHubIcon /> GitHub link</label> 
                    <input type="url" className="form-control" name="githublink" onChange={handleChange('githublink')} value={values.githublink} />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedinurl"><LinkedInIcon /> LinkedIn url</label> 
                    <input type="url" className="form-control" name="linkedinurl" onChange={handleChange('linkedinurl')} value={values.linkedinurl} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        );
    }
}


export default PersonalDetails;


