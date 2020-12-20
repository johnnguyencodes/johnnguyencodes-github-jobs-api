import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './job';
import SearchForm from './searchForm';
import JobDetails from './jobDetails';


export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const [view, setView] = useState('home');
  const [jobId, setJobId] = useState(-1);

  const handleResetPage = () => {
    setView('home');
  }

    const handleItemClick = (jobId) => {
      setPage('details');
      setJobId(jobId);
  }

  let jobDetails = {};
  if (page === 'details') {
    jobDetails = jobs.find((job) => job.id === jobId);
  }

  function handleParamChange(event) {
    const param = event.target.name;
    const value = event.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">devjobs</h1>
      <div className={`${view === 'details' && 'd-none'}`}>
        <SearchForm
          params={params}
          onParamChange={handleParamChange}
        />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        <div className="jobs-container col-12 d-flex flex-wrap justify-content-center">
          {jobs.map(job => {
            return <Job key={job.id} job={job} onItemClick={handleItemClick} />
          })}
        </div>
        <div className={`${view === 'home' && 'd-none'}`}>
          <JobDetails details={jobDetails} onResetPage={handleResetPage} />
        </div>
      </div>
    </Container>
  )
}
