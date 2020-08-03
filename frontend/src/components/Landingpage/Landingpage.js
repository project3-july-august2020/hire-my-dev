import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './landingpage.css';



class Landingpage extends Component {
    
    
    render() {

        
        
        return (
            <div class="container-fluid main">

            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span> 
                        </button>
                        <a class="navbar-brand" href="#">Website</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner" role="listbox">
                    <div class="item active background a"></div>
                    <div class="item background b"></div>
                    <div class="item background c"></div>
                </div>
            </div>

            <div class="covertext">
                <div class="col-lg-10" >
                    <h1 class="title">Hire-Me-Dev</h1>
                    <h3 class="subtitle">A site where Junior Devs can connect</h3>
                </div>
                <div class="col-xs-12 explore">
                    <a href="#"><button type="button" class="btn btn-lg explorebtn">EXPLORE</button></a>
                </div>
            </div>

        </div>

        )
    }
}

export default Landingpage;