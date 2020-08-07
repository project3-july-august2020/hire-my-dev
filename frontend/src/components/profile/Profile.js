import React, { Component } from 'react';
import actions from '../../services/index';
import '../../css/main.css'
import '../../css/noscript.css'
import image from '../../images/sky.jpg'

class Profile extends Component {
    state = { }

    componentDidMount(){
        if(!this.props.user.email){ 
            this.props.history.push('/log-in') 
        } 

        actions.getuserdata()
        .then(res => {console.log(res.data) 
        }).catch(({ error }) => console.error(error.data));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value  });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let res = await actions.project(this.state)

        console.log(res);


        
    }

    render(){
        return (
            <div>
                {/* Profile
                Welcome {this.props.user.email} !!!  */}
                <div id="wrapper" className="divided">

            {/* <!-- One --> */}
              <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                  <h1>Kolade Gureje</h1>
                  <p className="major">I am a react native developer with a passion for tech and sport </p>
                  <h3>My Porfolio</h3>
                  <p className="major">A showcase of my projects and abilities. </p>
                  <ul className="actions stacked">
                    <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
                  </ul>
                </div>
                <div className="image">
                  <img src= {image} alt="" />
                </div>
              </section>

            {/* <!-- Two --> */}
              <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
                <div className="content">
                  <h2>Wallpaper-App</h2>
                  <p>A simple wallpapers app built with react native and expo for iOS and Android devices. The app gets images from the unsplash api and displays them in the app to be shared or stored on user's device.</p>
                  <h3>Technologies</h3>
                  <p className="major">react native, expo, axios. </p>
                  <ul className="actions stacked">
                    <li><a href="https://github.com/koladeg/Wallpaper-App" className="button" target="_blank">View on Github</a></li>
                  </ul>
                </div>
                <div className="image">
                  <img src="https://media.giphy.com/media/iBj8c25K7Oi4AMTtPv/giphy.gif" alt="" />
                </div>
              </section>

            {/* <!-- Three --> */}
              <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                <div className="content">
                  <h2>Job_locator</h2>
                  <p>A Job locator app made with react native maps that makes it possible for users to find IT jobs closest to locations chosen by the user</p>
                  <h3>Technologies</h3>
                  <p className="major">react native, expo, axios, redux, react navigation, react native maps, native-base </p>
                  <ul className="actions stacked">
                    <li><a href="https://github.com/koladeg/job_locator" className="button" target="_blank">View on Github</a></li>
                  </ul>
                </div>
                <div className="image">
                  <img src="https://media.giphy.com/media/ftSZOWq2kzSquxuZB9/giphy.gif" alt="" />
                </div>
              </section>

            {/* <!-- Four --> */}
              <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
                <div className="content">
                  <h2>Album-app</h2>
                  <p>A test of concept app to sell beats produced by afrobeatsfactory.</p>
                  <h3>Technologies</h3>
                  <p className="major">react native, expo, axios, native-base </p>
                  <ul className="actions stacked">
                    <li><a href="#" className="button" target="_blank">View on Github</a></li>
                  </ul>
                </div>
                <div className="image">
                  <img src="https://media.giphy.com/media/SYX4natfMz3dshyhrp/giphy.gif" alt="" />
                </div>
              </section>

            {/* <!-- Five --> */}
              <section className="wrapper style1 align-center">
                <div className="inner">
                  <h2>About Me</h2>
                  <p>I am a self-taught react native developer with about a year and a half experience mostly spent refining my skills.
                    I am interested in making apps that can be beneficial to people around me and for the company I work with.
                    I wish to get enough experience in the tech industry to begin my start up in a few years centered on promoting health insurance adoption in Nigeria through mobile tech.
                    </p>
                </div>
              </section>


            {/* // Footer */}
              <footer className="wrapper style1 align-center">
                <div className="inner">
                  <ul className="icons">
                    <li><a href="https://github.com/koladeg" className="icon brands style2 fa-github" target="_blank"><span className="label">Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/kolade-gureje-70a82670" className="icon brands style2 fa-linkedin-in" target="_blank"><span className="label">LinkedIn</span></a></li>
                    <li><a href={this.props.user.email} className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
                  </ul>
                </div>
              </footer>
            </div>
            </div>
        );
    }
      
    
}

export default Profile;
