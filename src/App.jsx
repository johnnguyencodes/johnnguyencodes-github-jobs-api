import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './job';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      <div className="jobs-container col-12 d-flex flex-wrap justify-content-center">
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
      </div>
    </Container>
  )
}

export default App;
