import React, { Component } from 'react';


class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

//     handleFileUpload = (e) => {
//         console.log(e.target.files[0]);
// 		const uploadData = new FormData();
//         uploadData.append("imageUrl", e.target.files[0])
//         actions.fileUpload( uploadData).then(res => { 
//             console.log(res.data);
//         }).catch(err => console.error(err))
// }
    render() {
        const { values, handleChange, handleFileUpload } = this.props;
        return (
            <div className="form-container">
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="skills">Your picture</label>
                    <input
                                        type="file"
                                        name="imageUrl"
                                        aria-describedby="inputGroupFileAddon"
                                        onChange={(e)=>handleFileUpload(e, 'personal_details')}
                                        className="image-upload"
                                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Full name</label>
                    <input type="text" className="form-control" name="username" onChange={handleChange('username')} value={values.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Your Catch Phrase</label>
                    <textarea  type="text" rows="2" className="form-control" name="skills" onChange={handleChange('skills')} value={values.skills} />
                </div>
                <div className="form-group">
                    <label htmlFor="about">Short Bio About Yourself</label>
                    <textarea type="text" rows="9" className="form-control" name="about" onChange={handleChange('about')} value={values.about} />
                </div>

                <br />

                <div className="button-div">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        );
    }
}


export default PersonalDetails;


