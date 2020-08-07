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
import Aboutus from "./components/Aboutus/Aboutus";

const App = () => {
  
  let [user, setUser] = useState({})

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

  return(
    <BrowserRouter>
      {user?.email}
      <nav>

        {user?.email ? (
          <Fragment>
            <NavLink onClick={logOut} to="/">
              Log Out |
            </NavLink>
            <NavLink to="/profile">Profile|</NavLink>
          </Fragment>
        ) : (
          <Fragment>
            
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
        <Route exact path='/aboutus' render={() => <Aboutus/>} />
        <Route component={NotFound} />
      </Switch>
      {!user?.email && <GoogleAuth setUser={setUser} />}
      {!user?.email && <GoogleAuthLogin setUser={setUser} />}
    </BrowserRouter>
  )

}
export default App;
