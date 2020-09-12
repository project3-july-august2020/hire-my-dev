import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import './user.css'




class Project extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.index < 2){
            this.props.nextStep();
            this.props.addProj();
        }
        
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.PreviousStep();
    }

    render() {
        const { values, handleProjectChange, index, handleFileUpload} = this.props;
        let picId = `picture-${index}`,titleId = `title-${index}`, descId = `description-${index}`, techId = `technologies_used-${index}`, 
        gitId = `githubrepourl-${index}`, siteId = `sitelink-${index}` 
        return (
            <div className="form-container">
                <h1 className="mb-5">Project {index + 1}</h1>
                <div className="form-group">
                    <label htmlFor={picId}>Upload Project picture for your portfolio</label>
                    <input
                                        type="file"
                                        aria-describedby="inputGroupFileAddon"
                                        //onChange={handleProjectChange('picture')}
                                        //name="picture"
                                        name="imageUrl"
                                        onChange={e=>handleFileUpload(e, index)}
                                    />
                </div>
                <div className="form-group">
                    <label htmlFor={titleId} className="label">Project Title</label>
                    <input type="text" name="title"  onChange={e=>handleProjectChange(e, index)} value={values.projects[index].title} id={titleId}  data-id={index} />

                    <div className="fieldset">
                    <label htmlFor={techId} className="label">The Technologies Used</label>
                    <input type="text" name="technologies_used" onChange={e=>handleProjectChange(e, index)} value={values.projects[index].technologies_used} id={techId} data-id={index} />
                    </div>
                
                    <label htmlFor={descId} className="label">Project Description</label>
                    <textarea type="text" rows="4" name="description" onChange={e=>handleProjectChange(e, index)} value={values.projects[index].description} id={descId} data-id={index} />
           
                    <label htmlFor={gitId} className="label"><GitHubIcon /> Project GitHub link</label> 
                    <input type="url" name="githubrepourl" onChange={e=>handleProjectChange(e, index)} value={values.projects[index].githubrepourl} id={gitId} data-id={index} />
                
                    <label htmlFor={siteId} className="label"><HttpIcon /> Site's url</label> 
                    <input type="url" name="sitelink"  onChange={e=>handleProjectChange(e, index)} value={values.projects[index].sitelink} id={siteId} data-id={index} />
                </div>

                <div className="button-div">
                    <button className="btn btn-primary" onClick={this.back}>Return</button>

                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div> 
        );
    }
}




export default Project;

// picture: String,
//     title: String,
//     technologies_used: String,
//     description: String,
//     githubrepourl: String,
//     sitelink: String,


{/* <h1>Dynamic Form Fields in React</h1>
<form onSubmit={handleSubmit}>
  <div className="form-row">
    {inputFields.map((inputField, index) => (
      <Fragment key={`${inputField}~${index}`}>
        <div className="form-group col-sm-6">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={inputField.firstName}
            onChange={event => handleInputChange(index, event)}
          />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text" 
            className="form-control" 
            id="lastName"
            name="lastName"
            value={inputField.lastName}
            onChange={event => handleInputChange(index, event)}
          />
        </div>
        <div className="form-group col-sm-2">
          <button
            className="btn btn-link"
            type="button"
            onClick={() => handleRemoveFields(index)}
          >
            -
          </button>
          <button
            className="btn btn-link"
            type="button"
            onClick={() => handleAddFields()}
          >
            +
          </button>
        </div>
      </Fragment>
    ))}
  </div>
  <div className="submit-button">
    <button
      className="btn btn-primary mr-2"
      type="submit"
      onSubmit={handleSubmit}
    >
      Save
    </button>
  </div>
  <br/>
  <pre>
    {JSON.stringify(inputFields, null, 2)}
  </pre>
</form> */}