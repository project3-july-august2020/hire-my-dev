import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';


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
        
        const { values : {username, about, skills, githublink, imageUrl, linkedinurl}} = this.props;
        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="User Name"
                            secondary= {username}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Short Bio"
                            secondary= {about}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="catch phrase"
                            secondary= {skills}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                            primary="Github"
                            secondary= {githublink}
                        />
                    </ListItem>
                
                    <ListItem>
                        <ListItemText
                            primary="image"
                            secondary= {imageUrl}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                            primary="LinkedIn"
                            secondary= {linkedinurl}
                        />
                    </ListItem>

                </List>
                
                <br/>
                    <Button variant="contained" color="secondary" style={styles.button} onClick={this.back}>
                        Previous
                    </Button>
                    <Button variant="contained" color="default" style={styles.button} onClick={this.continue}>
                        continue
                    </Button>       
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