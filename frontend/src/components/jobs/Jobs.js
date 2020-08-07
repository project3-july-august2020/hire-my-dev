import React, { useState } from 'react';
import FetchJobs from '../../services/fetchjobs';
import Job from '../constants/Job';
import { Container } from '@material-ui/core';
import JobsPagination from '../constants/JobsPagination';
import SearchForm from '../constants/SearchForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

function Jobs() {
    const [ params, setParams ] = useState({})
    const [ page, setPage ] = useState(1)
    const { jobs, loading, error, hasNextPage } = FetchJobs( params, page)

    function handleParamChange(e) {
        console.log('Line 14 changepage');
        setPage(1)
        setParams( prevParams => {
            return {...prevParams, [e.target?.name]: e.target?.value};
        })
    }
    console.log("line 20", page, params);
        return (
            <Container className="Job_container">
            <SearchForm params={params} onParamChange={handleParamChange} />
            <JobsPagination page = {page} setPage={setPage} />
             {loading && <CircularProgress />}
             {error && <Alert severity="error">Error. Try Refreshing.</Alert>}   
             {jobs.map(job => {
                 return <Job key={job.id} job={job} />
             })}
             <JobsPagination page = {page} setPage={setPage} />
            </Container>
        );
    }

export default Jobs;