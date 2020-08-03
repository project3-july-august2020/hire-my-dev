import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './landingpage.css';

class Landingpage extends Component {
    render() {
        return (
            <div>
                <section class="cover">
  <nav>
    <span class="logo">
    Hire me dev.
  </span>
    <ul>
      <li>Products</li>
      <li>Services</li>
      <li>Articles</li>
      <li>More</li>
      <li></li>
      <li>Sign In</li>
      <li class="ghost-btn">Sign up for free</li>
    </ul>
  </nav>
  <div class="content">
    <h2 class="heading">We are here<br />for all your need.</h2>
    <p></p>
    <div class="cta-btn">
    <a href="#">Get Started</a>
    </div>
    <p class="highlight">Profile | Set Up</p>
    <div class="card">
      <h2>Hire-Me-Dev</h2>
      <p>Hire me dev is a site for developers to connect and gain job experience</p>
    </div>
  </div>
</section>
            </div>
        );
    }
}

export default Landingpage;