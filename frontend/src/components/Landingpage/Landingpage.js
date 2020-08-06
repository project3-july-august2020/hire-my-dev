import React, { Component } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import "./style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap';





class Landingpage extends Component {
  
    componentDidMount(){
      
      setInterval(() => {
        let arr = document.querySelectorAll(".background")
        let i 
        arr.forEach((el, index) => {
          if (el.classList[3] === "active"){
            el.classList.remove("active")
            i = index
          }
        })
        if (i === 2){
          arr[0].classList.add("active")
        }
        else{
          if(arr[i+1])arr[i+1].classList.add("active")
        }
      }, 3000);
    }

  render() {
    return (
      <div>
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'/>
{/* <link rel="stylesheet" href="./style.css"/> */}


<div class="container-fluid main">

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span> 
        </button>
        <a class="navbar-brand" href="/">Home</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="/sign-up">Sign-Up</a></li>
          <li><a href="/log-in">Sign-In</a></li>
          <li><a href="/jobs">Jobs</a></li>

        </ul>
      </div>
    </div>
  </nav>

  <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
    <div class="carousel-inner" role="listbox">
      <div class="item background a active"></div>
      <div class="item background b"></div>
      <div class="item background c"></div>
    </div>
  </div>
  
  <div class="covertext">
    <div class="col-lg-10">
      <h1 class="title">Hire-My-Dev</h1>
      <h3 class="subtitle">A site where Junior Devs can connect</h3>
    </div>
    <div class="col-xs-12 explore">
      <a href="#"><button type="button" class="btn btn-lg explorebtn">EXPLORE</button></a>
    </div>
  </div>
  
</div>


{/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'></script> */}



      </div>
      
    );
  }
  
}

export default Landingpage;
