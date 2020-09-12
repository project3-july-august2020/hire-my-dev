import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import RenderAccordion from './RenderAccordian';


class Confirm extends Component {

    confirm = e => {   
        this.props.handleSubmit();
    }

    back = e => {
        this.props.PreviousStep();
    }


    render() {
        
        const { values : {username, about, skills, githublink, imageUrl, linkedinurl, projects}} = this.props;
        return (
            <div className="confirm-list">

                <Container >
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
                    { 'Title': projects[0].title },
                    { 'Picture': projects[0].picture },
                    { 'Technologies Used': projects[0].technologies_used },
                    { 'Project Description': projects[0].description },
                    { 'Project Github url': projects[0].githubrepourl },
                    { 'Project Website': projects[0].sitelink },
                ]} />
                <RenderAccordion summary="Second project" details={[
                    { 'Title': projects[1].title },
                    { 'Picture': projects[1].picture },
                    { 'Technologies Used': projects[1].technologies_used },
                    { 'Project Description': projects[1].description },
                    { 'Project Github url': projects[1].githubrepourl },
                    { 'Project Website': projects[1].sitelink },
                ]} />
                <RenderAccordion summary="Third project" details={[
                    { 'Title': projects[2].title },
                    { 'Picture': projects[2].picture },
                    { 'Technologies Used': projects[2].technologies_used },
                    { 'Project Description': projects[2].description },
                    { 'Project Github url': projects[2].githubrepourl },
                    { 'Project Website': projects[2].sitelink },
                ]} />
                <br/>
                <div className="button-div">
                    <button className="btn btn-primary" onClick={this.back}>Return</button>

                    <button className="btn btn-primary" onClick={this.confirm}>Confirm</button>
                </div>  

                </Container>
                
                  
            </div>
        );
    }
}



export default Confirm;
