import React, { Component } from 'react';
import actions from '../../services/index';
import '../../css/main.css'
import '../../css/noscript.css'


class Profile extends Component {
    state = { 
      profile : {}
    }

    componentDidMount(){
        if(!this.props.user.email){ 
            this.props.history.push('/log-in') 
        } 
        // console.log(this.props.user);
        actions.getuserdata()
        .then(res => {
          this.setState({ profile: res.data.user });
          console.log(this.state.profile)
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
      console.log(this.state.profile.username);
      const { email, githublink, linkedinurl, username, about, imageUrl , skills, projects} = this.state.profile;
      // const [proj1, proj2, proj3] = this.state.profile.projects
      // let mail = `mailto:${email}`, proj1 = projects[0], proj2 = projects[1], proj3 = projects[2]
      // let [a, b] = projects
      
      console.log(projects);

      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
      
        return (
            <div>
                  {/* Profile
                  Welcome {this.props.user.email} !!!  */}
                  <div id="wrapper" className="divided">

              {/* <!-- One --> */}
                <section className="banner style1 orient-left content-align-left Url-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                  <div className="content">

                    <h1>{username}</h1>
                    <p className="major">{skills}</p>

                    <div className="inner">
                      <h2>About Me</h2>
                      <p>{about}</p>
                    </div>
                    
                    {/* <p className="major">A showcase of my projects and abilities. </p>
                    <ul className="actions stacked">
                      <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
                    </ul> */}
                  </div>
                  <div className="image">
                    <img src= {imageUrl} alt="" />
                  </div>
                </section>

              {/* <!-- Two --> */}
              {
                projects &&
                      ( projects.map(project =>  <section className="spotlight style1 orient-left content-align-left Url-position-center onscroll-Url-fade-in" id="first">
                          <div className="content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <h3>Technologies</h3>
                                <p className="major">{project.technologies_used}</p>
                            <ul className="actions stacked">
                              <li><a href={project.githubrepourl} className="button" target="_blank">View on Github</a></li>
                              <li><a href={project.sitelink} className="button" target="_blank">Site</a></li>
                            </ul>
                          </div>
                        <div className="image">
                            <img src={project.picture} alt="" />
                        </div>
                      </section> )
                      )

        
              }

              {/* <!-- Three --> */}
                {/* <section className="spotlight style1 orient-left content-align-left Url-position-center onscroll-Url-fade-in">
                  <div className="content">
                    <h2>{projects[1].title}</h2>
                    <p>{projects[1].description}</p>
                    <h3>Technologies</h3>
                    <p className="major">{projects[1].technologies_used}</p>
                    <ul className="actions stacked">
                      <li><a href={projects[1].githubrepourl} className="button" target="_blank">View on Github</a></li>
                    </ul>
                  </div>
                  <div className="Url">
                    <img src={projects[1].sitelink} alt="" />
                  </div>
                </section> */}

              {/* <!-- Four --> */}
                {/* <section className="spotlight style1 orient-right content-align-left Url-position-center onscroll-Url-fade-in">
                  <div className="content">
                    <h2>{projects[2].title}</h2>
                    <p>{projects[2].description}</p>
                    <h3>Technologies</h3>
                    <p className="major">{projects[2].technologies_used}</p>
                    <ul className="actions stacked">
                      <li><a href={projects[2].githubrepourl}  className="button" target="_blank">View on Github</a></li>
                    </ul>
                  </div>
                  <div className="Url">
                    <img src={projects[2].sitelink} alt="" />
                  </div>
                </section> */}

              {/* <!-- Five --> */}
                {/* <section className="wrapper style1 align-center">
                </section> */}


              {/* // Footer */}
                <footer className="wrapper style1 align-center">
                  <div className="inner">
                    <ul className="icons">
                      <li><a href={githublink} className="icon brands style2 fa-github" target="_blank"><span className="label">Github</span></a></li>
                      <li><a href={linkedinurl} className="icon brands style2 fa-linkedin-in" target="_blank"><span className="label">LinkedIn</span></a></li>
                      <li><a href={`mailto: ${email}`} className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
                    </ul>
                  </div>
                </footer>
              </div>
            </div>
        );
    }
      
    
}

export default Profile;


