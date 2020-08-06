import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import "./signup.css"

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
                {/* <h2>SignUP</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} />
                    <input name="password" type="password" onChange={this.handleChange} />
                    <input type="submit" value="Sign Up"/>
                </form> */}

                <div class="container">
  <div class="header-wrap">
    <h1>Hire-My-Dev <br /> Sign Up Page</h1>
  </div>
  <form onSubmit={this.handleSubmit} action="#">
    <div class="text-wrap">
    <input name="email" type="email" placeholder="Enter Email" onChange={this.handleChange} />
    </div>
    <div class="text-wrap">
    <input name="password" type="password" placeholder="Enter Password" onChange={this.handleChange} />
    </div>
    <div class="button-wrap">
    <input type="submit" value="Sign Up"/>
    </div>
  </form>
</div>
            </Fragment>
        );
    }
}

export default SignUp;