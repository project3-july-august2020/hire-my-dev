import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/profile/Profile";
import actions from "./services/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import Landingpage from "./components/Landingpage/Landingpage"
import Jobs from './components/jobs/Jobs';
import "./index.css"


class App extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("coolest ");
  }

  setUser = (user) => this.setState(user);

  logOut = async () => {
    let res = await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };

  handlechange = async(e) => {

    let data = new FormData();
    data.append('upload', e.target.files[0]);
    let res = await actions.fileUpload(data)
    console.log(res)

  }

  render() {
    return (
      <BrowserRouter>
        {this.state.email}
        <nav className = 'nav-item'>
          {/* <NavLink to="/">Home |</NavLink> */}

          {this.state.email ? (
            <Fragment>
              <NavLink onClick={this.logOut} to="/">
                Log Out |
              </NavLink>
              <NavLink to="/profile">Profile|</NavLink>
            </Fragment>
          ) : (
            <Fragment>
              {/* <NavLink to="/sign-up">Sign Up |</NavLink>
              <NavLink to="/log-in">Log In |</NavLink>
              <NavLink to="/jobs">Find Jobs</NavLink> */}
            </Fragment>
          )}
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/jobs" render={(props) => <Jobs {...props} />} />
          <Route
            exact
            path="/sign-up"
            render={(props) => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={(props) => <LogIn {...props} setUser={this.setUser} />}
          />

          <Route component={NotFound} />
        </Switch>
        {/* {!this.state.email && <GoogleAuth setUser={this.setUser} />}
        {!this.state.email && <GoogleAuthLogin setUser={this.setUser} />} */}

        <form><input type='file' onChange={this.handlechange}/></form>


      </BrowserRouter>
    );
  }
}
export default App;
