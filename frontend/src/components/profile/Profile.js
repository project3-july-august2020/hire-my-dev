import React, { Component } from 'react';
import actions from '../../services/index';

class Profile extends Component {
    state = { }

    componentDidMount(){
        if(!this.props.user.email){ 
            this.props.history.push('/log-in') 
        } 
    }

    handleChange = (e) => {
        [e.target.name] = e.target.value
    }

    handleSubmit = (event) => {
        event.preventDefault();
        actions.userdata(this.state).then(user=> {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }

    render(){
        return (
            <div>
                Profile
                Welcome {this.props.user.email} !!! 
                <form onSubmit={this.handleSubmit} id= "userform">
                <label>
                    Username:
                    <input type="text" name="username" onChange={this.handleChange} />
                </label>
                    <br/>
                    <label>
                    Skills:
                    <input type="text" name="skills" onChange={this.handleChange} />
                </label>
                    <br/>
                <label>
                    Linkedinurl:
                    <textarea name="linkedinurl" onChange={this.handleChange}/>
                </label>
                    <br/>
                    <label>
                    Githublink:
                    <textarea name="githublink" onChange={this.handleChange}/>
                </label>
                    <br/>
                <label>
                    About:
                    <textarea name="about" form="userform" onChange={this.handleChange}>Enter text here...</textarea>
                </label>
                    <br/>
                    <label>
                    picture:
                    <input type="text" name="picture" onChange={this.handleChange} />
                </label>
                    <br/>
                    <label>
                    title:
                    <input type="text" name="title" onChange={this.handleChange} />
                </label>
                    <br/>
                <label>
                    technologies_used:
                    <textarea name="technologies_used" onChange={this.handleChange}/>
                </label>
                    <br/>
                    <label>
                    githubrepourl:
                    <textarea name="githubrepourl" onChange={this.handleChange}/>
                </label>
                    <br/>
                <label>
                    description:
                    <textarea name="description" form="userform" onChange={this.handleChange}>Enter text here...</textarea>
                </label>
                    <br/>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
      
    
}

export default Profile;
