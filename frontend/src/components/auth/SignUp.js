import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import "./signup.css"
import Navbar from "../Navbar/Navbar"

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
                this.props.setUser({...user.data})  
            }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
                <div class="container2">
                    <div class="header-wrap">
                        <h1>Hire-My-Dev <br /> Sign Up Page</h1>
                    </div>
                    <form onSubmit={this.handleSubmit} >
                        <div class="text-wrap">
                        <input name="email" type="email" placeholder="Enter Email" onChange={this.handleChange} />
                        <div></div>
                        <input name="password" type="password" placeholder="Enter Password" onChange={this.handleChange} />
            
                        <input type="submit" value="Sign Up"/>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default SignUp;