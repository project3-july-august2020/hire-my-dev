import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Project from './Projects';
import Links from './Links';
import Confirm from './Confirm';

class UserForm extends Component {
    state ={
        step: 1,
        username: '',
        about: '',
        skills: '',
        githublink: '',
        imageUrl: '',
        linkedinurl:'',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    PreviousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]:  e.target.value });
    }

    render() {
        const { step } = this.state;
        const { username, about, skills, githublink, imageUrl, linkedinurl} = this.state;
        const values = {username, about, skills, githublink, imageUrl, linkedinurl}

        switch (step) {
            case 1: 
                return (
                    <PersonalDetails 
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return ( <Project
                    nextStep = {this.nextStep}
                    PreviousStep = {this.PreviousStep}
                    handleChange={this.handleChange}
                    values={values}
                /> )
            case 3:
                return ( <Links
                    nextStep = {this.nextStep}
                    PreviousStep = {this.PreviousStep}
                    handleChange={this.handleChange}
                    values={values}
                /> )
            case 4: 
                return  ( <Confirm
                        nextStep = {this.nextStep}
                        PreviousStep = {this.PreviousStep}
                        values={values}
                    /> )
            default:
                break;
        }
        
    }
}

export default UserForm;

// input user info: Full name, about you, picture, catch phase aboutyour occupation.
//projects: picture, tech used, links: github, live show, codepen, about 
//links

// username: String,
//   skills: [String],
//   linkedinurl: String,
//   email: String,
//   githublink: String,
//   about: String,
//   projects: [{
//     type: Schema.Types.ObjectId,
//     ref:"Project"
//   }],
//   favorite_jobs: [String],
//   googleId: String,
//   imageUrl: String,