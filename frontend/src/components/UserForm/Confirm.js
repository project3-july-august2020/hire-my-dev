import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import RenderAccordion from './RenderAccordian';


import Grid from '@material-ui/core/Grid';

class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.PreviousStep();
    }


    render() {
        
        const { values : {username, about, skills, githublink, imageUrl, linkedinurl, project}} = this.props;
        return (
            <div>

                <Container maxWidth='sm'>
                <h2>Review</h2>
                <RenderAccordion summary="Your Details" details={[
                    { 'Username': username },
                    {'Your Picture': imageUrl},
                    { 'Your Bio': about },
                    { 'Your Catch Phrase': skills },
                    { 'Your Github url': githublink },
                    { 'Your linkedin url ': linkedinurl },
                ]} />
                <RenderAccordion summary="First project" details={[
                    { 'Title': project[0].title },
                    { 'Picture': project[0].picture },
                    { 'Technologies Used': project[0].technologies_used },
                    { 'Project Description': project[0].description },
                    { 'Project Github url': project[0].githubrepourl },
                    { 'Project Website': project[0].sitelink },
                ]} />
                <br/>
                <div className="button-div">
                    <button className="btn btn-primary" onClick={this.back}>Return</button>

                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>  

                </Container>
                
                  
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default Confirm;
