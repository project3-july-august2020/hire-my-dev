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
    handleProjectChange = (e, name)=> {
        console.log(this);
        let projects = [...this.state.projects]
        projects[name][e.target.name] = e.target.value
        this.setState({ projects })
    }

    //send all image upload to cloudinary
    handleFileUpload = (e, name) => {
        console.log(e.target.files[0], name);
		const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0])
        actions.fileUpload( uploadData).then(res => { 
            // console.log(res.data.path, name); 
            let projects = [...this.state.projects]
            let imageUrl = {...this.state.imageUrl}
            // console.log(res.data.path, name);
            //Do your logic   
            if(name === 'personal_details'){
                imageUrl = res.data.path
                this.setState({ imageUrl })
            }else{
                projects[name].picture = res.data.path
                this.setState({ projects })
            }
        }).catch(err => console.error(err))
}
    //submit all users' data to backend 
    handleSubmit = () => {
        actions.userdata(this.state).then(user => {
            console.log(user);
            this.props.setUser({...user.data})  
            this.setState({ redirect: "/profile" }); 
        }).catch(( response ) => console.error(response));
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
                    PreviousStep = {this.PreviousStep}
                    values={values}
                    handleSubmit= {this.handleSubmit}
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


// {
//     "redirect": null,
//     "step": 2,
//     "username": "kolade naruto",
//     "about": "   I am a self-taught react native developer with about a year and a half experience mostly spent refining my skills.    I am interested in making apps that can be beneficial to people around me and for the company I work with.    I wish to get enough experience in the tech industry to begin my start up in a few years centered on promoting health insurance adoption in Nigeria through mobile tech.    ",
//     "skills": "I am a web developer who loves to make apps that helps people",
//     "githublink": "https://github.com/koladeg",
//     "imageUrl": "",
//     "linkedinurl": "https://www.linkedin.com/in/kolade-gureje/",
//     "projects": [
//       {
//         "picture": "https://res.cloudinary.com/dpapjdvi5/image/upload/v1597855455/rsnip9tcmwhy5plycvoe.png",
//         "title": "Fisherman",
//         "technologies_used": "javascript, canvas, HTML5",
//         "description": "A JavaScript based game in which you need to catch as many fish as possible within a time frame. The game is meant to be fun with flappy birds like controls with a timeless mario game design. Its styled with CSS and rendered on HTML5 using Canvas with sprites for images.",
//         "githubrepourl": "https://github.com/koladeg/fisherman",
//         "sitelink": "https://koladeg.github.io/fisherman/"
//       },
//       {
//         "picture": "https://res.cloudinary.com/dpapjdvi5/image/upload/v1597856029/jww0n0szx4mauocjj0mp.png",
//         "title": "World cup Redo",
//         "technologies_used": "React js, react-router-dom, axios",
//         "description": "Using information based on each team such as the best colour, moods, jersey number, and horoscope of the player of each teams along with data from an astrological api. The application uses an algorithm to assess the scores.",
//         "githubrepourl": "https://github.com/mattjmanzo/world-cup-app",
//         "sitelink": "https://astrological-world-cup.netlify.app/."
//       },
//       {
//         "picture": "https://res.cloudinary.com/dpapjdvi5/image/upload/v1597857001/cwyr4dybecc0zttexcbu.jpg",
//         "title": "hire-my-dev",
//         "technologies_used": "bootstrap, react js, mongo db, Express js, passport, material UI",
//         "description": "An interactive application designed for student developers and bootcamp graduates, providing them a platform to highlight their profiles, portfolios, and achievements.",
//         "githubrepourl": "https://github.com/project3-july-august2020/hire-my-dev",
//         "sitelink": "https://hiremydev.com"
//       }
//     ],
//     "state": {
//       "redirect": null,
//       "step": 1,
//       "username": "kolade naruto",
//       "about": "           I am a self-taught react native developer with about a year and a half experience mostly spent refining my skills.\n\t\tI am interested in making apps that can be beneficial to people around me and for the company I work with.\n\t\t\tI wish to get enough experience in the tech industry to begin my start up in a few years centered on promoting health insurance adoption in Nigeria through mobile tech.\n\t\t\t\t\t\t\t\t ",
//       "skills": "I  am a web developer who loves to make apps that helps people",
//       "githublink": "https://github.com/koladeg",
//       "imageUrl": "https://res.cloudinary.com/dpapjdvi5/image/upload/v1597857631/ekbjmkkyyq0lkgityu9f.jpg",
//       "linkedinurl": "https://www.linkedin.com/in/kolade-gureje/",
//       "projects": "[{…}, {…}, {…}]",
//       "state": "{about: \"           I am a self-taught react native…}"
//     }
//   }