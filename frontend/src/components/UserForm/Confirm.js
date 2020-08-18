import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import RenderAccordion from './RenderAccordian';


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
            <div className="confirm-list">

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
                <RenderAccordion summary="Second project" details={[
                    { 'Title': project[1].title },
                    { 'Picture': project[1].picture },
                    { 'Technologies Used': project[1].technologies_used },
                    { 'Project Description': project[1].description },
                    { 'Project Github url': project[1].githubrepourl },
                    { 'Project Website': project[1].sitelink },
                ]} />
                <RenderAccordion summary="Third project" details={[
                    { 'Title': project[2].title },
                    { 'Picture': project[2].picture },
                    { 'Technologies Used': project[2].technologies_used },
                    { 'Project Description': project[2].description },
                    { 'Project Github url': project[2].githubrepourl },
                    { 'Project Website': project[2].sitelink },
                ]} />
                <br/>
                <div className="button-div">
                    <button className="btn btn-primary" onClick={this.back}>Return</button>

                    <button onClick={this.continue}>Confirm</button>
                </div>  

                </Container>
                
                  
            </div>
        );
    }
}



export default Confirm;
