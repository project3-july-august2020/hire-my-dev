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
        this.setState({ [e.target.name]: e.target.value  });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let res = await actions.project(this.state)

        console.log(res);
        
        // .then(user=> {
        //     this.props.setUser({...user.data})  
        // }).catch(({ response }) => console.error(response.data));
    }

    render(){
        return (
            <div>
                Profile
                Welcome {this.props.user.email} !!! 
                {/* <form onSubmit={this.handleSubmit} id= "userform">
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
                    <input name="linkedinurl" onChange={this.handleChange}/>
                </label>
                    <br/>
                    <label>
                    Githublink:
                    <input name="githublink" onChange={this.handleChange}/>
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
                    <input name="githubrepourl" onChange={this.handleChange}/>
                </label>
                    <br/>
                <label>
                    description:
                    <textarea name="description" form="userform" onChange={this.handleChange}>Enter text here...</textarea>
                </label>
                    <br/>
                <input type="submit" value="Submit" />
            </form> */}
            <form onSubmit={this.handleSubmit} id= "userform">
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
                    <input name="githubrepourl" onChange={this.handleChange}/>
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


// picture: String,
//     title: String,
//     technologies_used: String,
//     description: String,
//     githubrepourl: String,
//     sitelink: String,
//     owner: {
//       type: Schema.Types.ObjectId,
//       ref:"User"
//     },
//     });