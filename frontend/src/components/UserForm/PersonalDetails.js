import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
            <form noValidate autoComplete="on">
                <div>
                <Button
                    variant="contained"
                    component="label"
                    >
                    Upload picture
                    <input
                        type="file"
                        style={{ display: "none" }}
                    />
                </Button>
                </div>
                <TextField
                    required
                    // id="outlined-required"
                    label="Full name"
                    defaultValue={values.username}
                    variant="outlined"
                    onChange={handleChange('username')}
                />
                <br />
                <TextField
                    id="standard-multiline-static"
                    label="Short Bio about you"
                    multiline
                    variant="outlined"
                    rows={4}
                    defaultValue={values.about}
                    onChange={handleChange('about')}
                />
                <br/>
                <TextField
                    id="standard-multiline-static"
                    label="your catch phrase"
                    multiline
                    rows={2}
                    defaultValue={values.skills}
                    onChange={handleChange('skills')}
                />
                <br/>
                <Button variant="contained" color="primary" style={styles.button} onClick={this.continue}>
                    continue
                </Button>
            </form>
                            
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default PersonalDetails;

