import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import "./signup.css"
import { Redirect } from "react-router-dom";

class SignUp extends Component {
    state = {
        redirect: null
    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
                this.props.setUser({...user.data}) 
                this.setState({ redirect: "/userform" }); 
            }).catch(({ response }) => console.error(response.data));
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
          return(
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
          )
    }
}

export default SignUp;