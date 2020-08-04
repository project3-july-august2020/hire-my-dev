import React, { useState } from 'react';
import FetchJobs from '../../services/fetchjobs';
import Job from '../constants/Job';

function Jobs() {
    const [ params, setParams ] = useState({})
    const [ page, setPage ] = useState(1)
    const { jobs, loading, error } = FetchJobs( params, page)
        return (
            <div>
             {loading && <h1>loading...</h1>}
             {error && <h1>Error. Try Refreshing.</h1>}   
             {jobs.map(job => {
                 return <Job key={job.id} job={job} />
             })}
            </div>
        );
    }

export default Jobs;