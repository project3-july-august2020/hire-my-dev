import React, { useState } from 'react';
import FetchJobs from '../../services/fetchjobs';
import Job from '../constants/Job';
import { Container } from '@material-ui/core';
import JobsPagination from '../constants/JobsPagination';
import SearchForm from '../constants/SearchForm';

function Jobs() {
    const [ params, setParams ] = useState({})
    const [ page, setPage ] = useState(1)
    const { jobs, loading, error, hasNextPage } = FetchJobs( params, page)

    function handleParamChange(e) {
        setPage(1)
        setParams( prevParams => {
            return {...prevParams, [e.target?.name]: e.target?.value};
        })
    }
        return (
            <Container className="Job_container">
            <SearchForm params={params} onParamChange={handleParamChange} />
            <JobsPagination page = {page} setPage={setPage} />
             {loading && <h1>loading...</h1>}
             {error && <h1>Error. Try Refreshing.</h1>}   
             {jobs.map(job => {
                 return <Job key={job.id} job={job} />
             })}
             <JobsPagination page = {page} setPage={setPage} />
            </Container>
        );
    }

export default Jobs;