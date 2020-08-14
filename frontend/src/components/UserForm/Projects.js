import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';




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
        const { values, handleChange, index } = this.props;
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
                                        onChange={this.handleFileUpload}
                                        className="picture"
                                        name={picId}
                                        value={values.project[index].picture}
                                        id={picId}
                                        data-id={index}
                                    />
                </div>
                <div className="form-group">
                    <label htmlFor={titleId}>Project Title</label>
                    <input type="text" className="title" name={titleId} onChange={handleChange('title')} value={values.project[index].title} id={index}  data-id={index} />
               
                    <label htmlFor={techId}>The Technologies Used</label>
                    <input type="text" className="technologies_used" name={techId} onChange={handleChange('technologies_used')} value={values.project[index].technologies_used} id={index} data-id={index} />
                
                    <label htmlFor={descId}>Project Description</label>
                    <textarea type="text" rows="4" className="description" name={descId} onChange={handleChange('description')} value={values.project[index].description} id={index} data-id={index} />
           
                    <label htmlFor={gitId}><GitHubIcon /> Project GitHub link</label> 
                    <input type="url" className="githubrepourl" name={gitId} onChange={handleChange('githubrepourl')} value={values.project[index].githubrepourl} id={index} data-id={index} />
                
                    <label htmlFor={siteId}><HttpIcon /> Site's url</label> 
                    <input type="url" className="sitelink" name={siteId} onChange={handleChange('sitelink')} value={values.project[index].sitelink} id={index} data-id={index} />
                </div>

                <div className="text-left">
                    <button className="btn btn-primary" onClick={this.back}>Return</button>
                </div>

                <div className="text-right">
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