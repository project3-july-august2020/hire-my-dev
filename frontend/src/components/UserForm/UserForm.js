import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Project from './Projects';
import Links from './Links';
import Confirm from './Confirm';
import actions from '../../services';
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
        if(this.state.project.length < 3){
            this.setState( (prevState) => ({
                project: [...prevState.project, { picture: '', title: '', technologies_used: '', description: '', githubrepourl: '', sitelink: '' }],
            }));
        }
    }

    handleChange = input => e => {
     this.setState({ [input]:  e.target.value });
    }
    handleProjectChange = input => e => {
        console.log(e.target.dataset.id);
        let project = [...this.state.project]
        project[e.target.dataset.id][e.target.name] = e.target.value
        this.setState({ project }, () => console.log(this.state.project))
    }

    handleFileUpload = (e, name) => {
        console.log(e.target.files[0], name);
		const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0])
        actions.fileUpload( uploadData).then(res => { 
            console.log(res.data.path, name); 
            let state = {...this.state}
            //Do your logic
            if(name == 'personal_details'){
                state.imageUrl = res.data.path
            }else{
                state.project[name].picture = res.data.path
            }
            this.setState({ state }, () => console.log(this.state.state))
        }).catch(err => console.error(err))
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
                                handleFileUpload= {this.handleFileUpload}
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
                            handleProjectChange={this.handleProjectChange}
                            values={values}
                            index = {0}
                            addProj = {this.addProj}
                            handleFileUpload= {this.handleFileUpload}
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
                            handleProjectChange={this.handleProjectChange}
                            values={values}
                            index = {1}
                            addProj = {this.addProj}
                            handleFileUpload= {this.handleFileUpload}
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
                            handleProjectChange={this.handleProjectChange}
                            values={values}
                            index = {2}
                            handleFileUpload= {this.handleFileUpload}
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

