import React, { Component } from 'react';
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap';
import { Link } from 'react-router-dom';
import WorkIcon from '@material-ui/icons/Work';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';





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


  <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
    <div class="carousel-inner" role="listbox">
      <div class="item background a active"></div>
      <div class="item background b"></div>
      <div class="item background c"></div>
    </div>
  
  
  <div class="covertext">
    <div class="col-lg-10">
      <h1 class="title">Hire-My-Dev</h1>
      <h3 class="subtitle">A site where Junior Devs can connect</h3>
      </div>
      <div class="col-xs-12 explore">
      {
            !this.props.user?.email ?
          ( 
            <Link to="/log-in"><button type="button" class="btn btn-lg explorebtn">Sign-In</button></Link>
          ):(
            <Link to="/profile"><button type="button" class="btn btn-lg explorebtn">View-profile</button></Link>
          ) }
      </div>
    </div>
    <section id="features">
          <div className="contain">
            <div>
                <WorkIcon className="img" />
                <h4 className="member-name" >Jobs locator</h4>
                <p>Find jobs for developers and for UI/UX. Add jobs you like to your favorites to check on them at any time.</p>
            </div>
            <div>
              <AccountBoxIcon className="img" />
                <h4 className="member-name" > Manage your portfolio</h4>
                <p>Create a protfolio for yourself within a few steps and showcase your various projects</p>
            </div>
            <div>
              <CompareArrowsIcon className="img" />
                <h4 className="member-name" > Connect with recruiters</h4>
                <p>Ensure you add links to your email, linkedin profile and your github repo for recuiters to know who you are  </p>
            </div>
      
          </div>
          <Link to="/aboutus" className="feature-btn">About us</Link>
      </section> 
    
    
    
    {/* <div class="col-xs-12 explore">
      <button type="button" class="btn btn-lg explorebtn">Sign Up</button>
    </div> */}
  </div>
      
    );
  }
  
}

export default Landingpage;

{/* <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
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
  </div> */}