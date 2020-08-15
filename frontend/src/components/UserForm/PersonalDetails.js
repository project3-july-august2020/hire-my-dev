import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import actions from '../../services';

class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    handleFileUpload = (e) => {
		const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0])
        actions.fileUpload( uploadData).then(res => { 
            console.log(res.data);
        })
}
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="form-container">
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="skills">Your picture</label>
                    <input
                                        type="file"
                                        aria-describedby="inputGroupFileAddon"
                                        onChange={this.handleFileUpload}
                                        className="image-upload"
                                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Full name</label>
                    <input type="text" className="form-control" name="username" onChange={handleChange('username')} value={values.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Your Catch Phrase</label>
                    <input type="text" className="form-control" name="skills" onChange={handleChange('skills')} value={values.skills} />
                </div>
                <div className="form-group">
                    <label htmlFor="about">Short Bio About Yourself</label>
                    <textarea type="text" rows="4" className="form-control" name="about" onChange={handleChange('about')} value={values.about} />
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


