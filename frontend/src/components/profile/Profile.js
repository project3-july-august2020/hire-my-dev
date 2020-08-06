import React, { Component } from 'react';
import actions from '../../services/index';

class Profile extends Component {
    state = { }

    componentDidMount(){
        if(!this.props.user.email){ 
            this.props.history.push('/log-in') 
        } 

        actions.getuserdata()
        .then(res => {console.log(res.data) 
        }).catch(({ error }) => console.error(error.data));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value  });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let res = await actions.project(this.state)

        console.log(res);


        
    }

    render(){
        return (
            <div>
                Profile
                Welcome {this.props.user.email} !!! 
            </div>
        );
    }
      
    
}

export default Profile;
