import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import Project from './Projects';
import Links from './Links';
import Confirm from './Confirm';
import actions from '../../services';
import { Redirect } from "react-router-dom";
import './user.css'

class UserForm extends Component {
    state ={
        redirect: null,
        step: 1,
        username: '',
        about: '',
        skills: '',
        githublink: '',
        imageUrl: '',
        linkedinurl:'',
        projects: [{ picture: '', title: '', technologies_used: '',description: '', githubrepourl: '', sitelink: '' }]
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
        if(this.state.projects.length < 3){
            this.setState( (prevState) => ({
                projects: [...prevState.projects, { picture: '', title: '', technologies_used: '', description: '', githubrepourl: '', sitelink: '' }],
            }));
        }
    }

    handleChange = input => e => {
     this.setState({ [input]:  e.target.value });
    }
    handleProjectChange = input => e => {
        // console.log(e.target.dataset.id);
        let projects = [...this.state.projects]
        projects[e.target.dataset.id][e.target.name] = e.target.value
        this.setState({ projects }, () => console.log(this.state.projects))
    }

    //send all image upload to cloudinary
    handleFileUpload = (e, name) => {
        console.log(e.target.files[0], name);
		const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0])
        actions.fileUpload( uploadData).then(res => { 
            // console.log(res.data.path, name); 
            let state = {...this.state}
            //Do your logic
            if(name == 'personal_details'){
                state.imageUrl = res.data.path
            }else{
                state.projects[name].picture = res.data.path
            }
            this.setState({ state })
        }).catch(err => console.error(err))
}
    //submit all users' data to backend 
    handleSubmit = e => {
        e.preventDefault()
        actions.userdata(this.state).then(user => {
            this.props.setUser({...user.data})  
            this.setState({ redirect: "/profile" }); 
        }).catch(({ response }) => console.error(response.data));
    }

    render() {
        const { step } = this.state;
        const { username, about, skills, githublink, imageUrl, linkedinurl, projects} = this.state;
        const values = {username, about, skills, githublink, imageUrl, linkedinurl, projects}

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
                if (this.state.redirect) {
                    return <Redirect to={this.state.redirect} />
                  }
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
//: picture, tech used, links: github, live show, codepen, about 
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


