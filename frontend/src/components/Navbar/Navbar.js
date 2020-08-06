import React, { Component } from 'react';
import "./Navbar.css"
import Logo from '../../images/Logo.png'

class Navbar extends Component {
    render() {
        return (
            <div>
                
<div id="main">
  <div class="container">
    <div>
      <img src={Logo} />
      <h1>Hire-My-Dev</h1>
    </div>
    <nav>
      <div class="nav-fostrap">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/log-in">Sign-In</a></li>
          <li><a href="/sign-up">Sign-up</a></li>
          <li><a href="">About Us</a></li>
        </ul>
      </div>
      <div class="nav-bg-fostrap">
        <div class="navbar-fostrap"> <span></span> <span></span> <span></span> </div>
        <a href="" class="title-mobile">Fostrap</a>
      </div>
    </nav>
    <div class='content'>
    </div>
</div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script></script>
            </div>
        );
    }
}

export default Navbar;