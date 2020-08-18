import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import "./login.css"
import { Redirect } from "react-router-dom";

class LogIn extends Component {

    state = {
      redirect: null
    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
            this.setState({ redirect: "/profile" }); 
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
        return(
        <Fragment>
          {/* <h2>LogIn</h2>
            <form onSubmit={this.handleSubmit}>
                <input name="email" type="email" onChange={this.handleChange} />
                <input name="password" type="password" onChange={this.handleChange} />
                <input type="submit" value="Log In"/>
            </form> */}
          
          <div class="container2">
            <form onSubmit={this.handleSubmit} class="login-form">
              <div class="login-logo">
               <i class="glyphicon glyphicon-picture"></i> <span>Hire-My-Dev</span>
              </div>
              <div class="login-info">
               Welcome, please sign in
              </div>
              <div class="login-input">
                <label for="email">Email</label>
                <input name="email" type="email" onChange={this.handleChange} />
              </div>
              <div class="login-input">
                <label for="password">Password</label>
                <input name="password" type="password" onChange={this.handleChange} />
              </div>
              <div class="login-forgot">
                <a href="#">Forgot your password?</a>
              </div>
              <div class="login-submit">
                <input type="submit" value="Log In"/>
              </div>
            </form>
          </div>
        <div class="footer"></div>
      </Fragment>
      )
    }
}

export default LogIn;

