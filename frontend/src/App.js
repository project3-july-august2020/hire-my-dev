import React, { Component, Fragment, useState, useEffect } from "react";
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

<<<<<<< HEAD
const App = () => {
  
  let [user, setUser] = useState({})
=======

class App extends Component {
  state = {};
>>>>>>> ef1efc42e2bde54eefa00cbe6d0805f3a1c13872

  useEffect(() => {
    async function getUser() {
      let user = await actions.isLoggedIn();
      setUser(user.data)
    }
    getUser();    
  }, [])

  const logOut = async () => {
    let res = await actions.logOut();
    setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };

<<<<<<< HEAD
  return(
    <BrowserRouter>
      {user?.email}
      <nav>
        <NavLink to="/">Home |</NavLink>
=======
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
>>>>>>> ef1efc42e2bde54eefa00cbe6d0805f3a1c13872

        {user?.email ? (
          <Fragment>
            <NavLink onClick={logOut} to="/">
              Log Out |
            </NavLink>
            <NavLink to="/profile">Profile|</NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <NavLink to="/sign-up">Sign Up |</NavLink>
            <NavLink to="/log-in">Log In |</NavLink>
            <NavLink to="/landingpage">Starting screen |</NavLink>
            <NavLink to="/jobs">Find Jobs</NavLink>
          </Fragment>
        )}
      </nav>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/sign-up"
          render={(props) => <SignUp {...props} setUser={setUser} />}
        />
        <Route
          exact
          path="/log-in"
          render={(props) => <LogIn {...props} setUser={setUser} />}
        />
        <Route
          exact
          path="/profile"
          render={(props) => <Profile {...props} user={user} />}
        />
        <Route exact path="/jobs" render={(props) => <Jobs {...props} />} />
        <Route exact path='/landingpage' render={() => <Landingpage/>} />
        <Route component={NotFound} />
      </Switch>
      {!user?.email && <GoogleAuth setUser={setUser} />}
      {!user?.email && <GoogleAuthLogin setUser={setUser} />}
    </BrowserRouter>
  )

}
export default App;
