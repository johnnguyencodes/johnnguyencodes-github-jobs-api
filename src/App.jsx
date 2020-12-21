import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './job';
import SearchForm from './searchForm';
import JobDetails from './jobDetails';


export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [selection, setSelection] = useState(null);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const [view, setView] = useState('home');
  const [jobId, setJobId] = useState(-1);


  const handleResetView = () => {
    setView('home');
  }

  const handleItemClick = (jobId) => {
    setView('details');
    setJobId(jobId);
    window.scrollTo(0, 0);
  }

  const handleLoadMoreJobs = () => {
    setPage(page + 1);
  }

  let jobDetails = {};
  if (view === 'details') {
    jobDetails = jobs.find((job) => job.id === jobId);
  }

  const handleParamChange = (event) => {
    const param = event.target.name;
    const value = event.target.value;
    if (document.getElementById("geolocation").checked === true) {

    }
    if (document.getElementById("geolocation").checked === false) {
      params.lat = '';
      params.long = '';
    }
    if (params.lat) {
      params.location = '';
    }
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">devjobs</h1>
      <div className={`${view === 'details' && 'hide'}`}>
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
          {jobs.length > 0 &&  (
            <div className="load-more" onClick={loading ? null : handleLoadMoreJobs}>
              <button disabled={loading} className={`${loading ? 'disabled' : ''}`}>
                Load More Jobs
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={`${view === 'home' && 'hide'}`}>
        <JobDetails details={jobDetails} onResetView={handleResetView} />
      </div>
    </Container>
  )
}
