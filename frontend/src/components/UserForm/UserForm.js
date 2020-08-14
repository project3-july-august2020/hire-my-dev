import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Project from './Projects';
import Links from './Links';
import Confirm from './Confirm';
import './user.css'

class UserForm extends Component {
    state ={
        step: 1,
        username: '',
        about: '',
        skills: '',
        githublink: '',
        imageUrl: '',
        linkedinurl:'',
        project: [{ picture: '', title: '', technologies_used: '',description: '', githubrepourl: '', sitelink: '' }]
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

    addProj = () => {
        this.setState( (prevState) => ({
            project: [...prevState.project, { picture: '', title: '', technologies_used: '', description: '', githubrepourl: '', sitelink: '' }],
        }));
    }

    handleChange = input => e => {

        if ([input].includes(e.target.id) ) {
            let project = [...this.state.project]
            project[e.target.id][e.target.className] = e.target.value
            this.setState({ project }, () => console.log(this.state.cats))
          } else {
            this.setState({ [input]:  e.target.value });
          }
    }

    render() {
        const { step } = this.state;
        const { username, about, skills, githublink, imageUrl, linkedinurl, project} = this.state;
        const values = {username, about, skills, githublink, imageUrl, linkedinurl, project}

        switch (step) {
            case 1: 
                return (
                    <div className="form">
                            <PersonalDetails 
                                nextStep = {this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                    </div>  
                );
            case 2:
                return ( 
                    <div className="form">
                        <div className="form-box">
                        <Links
                            nextStep = {this.nextStep}
                            PreviousStep = {this.PreviousStep}
                            handleChange={this.handleChange}
                            values={values}
                        /> 
                        </div>     
                    </div>  
                    )
                    case 3:
                return ( 
                    <div className="form">
                        <div className="form-box">
                        <Project
                            nextStep = {this.nextStep}
                            PreviousStep = {this.PreviousStep}
                            handleChange={this.handleChange}
                            values={values}
                            index = {0}
                            addProj = {this.addProj}
                        />  
                        </div>     
                    </div>  
                    )
            case 4:
                return ( 
                    <div className="form">
                        <div className="form-box">
                        <Project
                            nextStep = {this.nextStep}
                            PreviousStep = {this.PreviousStep}
                            handleChange={this.handleChange}
                            values={values}
                            index = {1}
                            addProj = {this.addProj}
                        />  
                        </div>     
                    </div>  
                    )
            case 5:
                return ( 
                    <div className="form">
                        <div className="form-box">
                        <Project
                            nextStep = {this.nextStep}
                            PreviousStep = {this.PreviousStep}
                            handleChange={this.handleChange}
                            values={values}
                            index = {2}
                        />  
                        </div>     
                    </div>  
                )
            case 6:
                return ( <Confirm
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

