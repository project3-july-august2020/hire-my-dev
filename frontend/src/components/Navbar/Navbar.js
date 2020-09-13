import React, { Component, Fragment } from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom'
import Logo from '../../images/Logo.png'

class Navbar extends Component {
    render() {
      console.log(this);
        return (
//             <div>
                
// {/* <div id="main"> */}
//   {/* <div class="container">
//     <div>
//       <img src={Logo} />
//       <h1>Hire-My-Dev</h1>
//     </div> */}
//     <nav>
//       <div class="nav-fostrap">
//         <ul>
//           <li><Link href="/">Home</Link></li>
//           <li><a href="/log-in">Sign-In</a></li>
//           <li><a href="/sign-up">Sign-up</a></li>
//           <li><a href="/aboutus">About Us</a></li>
//         </ul>
//       </div>
//       <div class="nav-bg-fostrap">
//         <div class="navbar-fostrap"> <span></span> <span></span> <span></span> </div>
//         <a href="" class="title-mobile">Fostrap</a>
//       </div>
//     </nav>
// </div>
 <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span> 
        </button>
        <Link class="navbar-brand" to="/">Home</Link>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><Link to="/aboutus">About</Link></li>
          {
            !this.props.user?.email ?
          ( <Fragment>
            {/* <li><Link to="/userform">Sign-Up</Link></li> */}
          <li><Link to="/log-in">Sign-In</Link></li>
            </Fragment>
          )

          :
          ( <Fragment>
          <li><Link to="/" onClick={this.props.logOut}>Sign-Out</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
            </Fragment>
          )
          }

        </ul>
      </div>
    </div>
  </nav> 
        );
    }
}

export default Navbar;