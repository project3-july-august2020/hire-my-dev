import React, { Component } from 'react';
import Job from '../constants/Job';
import actions from '../../services';
import './FavoriteJob.css'


class FavoriteJobs extends Component {
    state = { 
      jobs : [],
    }

    componentDidMount(){

        actions.getFavoriteJobs()
        .then(res => {
          this.setState({ jobs: res.data });
          console.log(this.state.jobs)
        }).catch(({ error }) => console.error(error.data));
    }

    load = () => {
        actions.getFavoriteJobs()
        .then(res => {
          this.setState({ jobs: res.data });
          console.log(this.state.jobs)
        }).catch(({ error }) => console.error(error.data));
    }

    // handleSubmit = async (event) => {
    //     event.preventDefault();
    //     let res = await actions.project(this.state)

    //     console.log(res);        
    // }


    render(){

        return (
            <div className="favorites">
        {
            this.state.jobs?.length === 0 ? (
                <div className='checkout_intro'>
                    <h2>You added no jobs to favorites</h2>
                    <p>You have no liked jobs. To add job to favorites, click the "like" button on the job you want to add to favorites.</p>
                </div>
            ) : (
                    <div className='favorites'>    
                        <h2 className='checkout_intro'>Favorite Jobs</h2>
                        {this.state.jobs.map(job => {
                            return <Job key={job.id} job={job} favoriteJob load={this.load} />
                        })}
                  </div>
                    
            )}
        </div>
        )
        
    }
      
    
}

export default FavoriteJobs;

