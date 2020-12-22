import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container, Button } from 'react-bootstrap';
import Job from './job';
import SearchForm from './searchForm';
import JobDetails from './jobDetails';
import Header from './header';
import Footer from './footer';

export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const [view, setView] = useState('home');
  const [jobId, setJobId] = useState(-1);

  const handleResetView = () => {
    setView('home');
  };

  const handleItemClick = jobId => {
    setView('details');
    setJobId(jobId);
    window.scrollTo(0, 0);
  };

  const handleLoadMoreJobs = params => {
    setPage(page + 1);
  };

  let jobDetails = {};
  if (view === 'details') {
    jobDetails = jobs.find(job => job.id === jobId);
  }

  const handleParamChange = event => {
    const param = event.target.name;
    const value = event.target.value;
    if (document.getElementById('geolocation').checked === true) {
      params.location = '';
    }
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  };

  let buttonClassName;

  if (loading) {
    buttonClassName = 'disabled';
  } else {
    buttonClassName = 'text-white font-weight-bold mb-4 btn-outline-none';
  }

  if (jobs.length % 50) {
    buttonClassName = 'hide';
  } else {
    buttonClassName = 'text-white font-weight-bold mb-4 btn-outline-none';
  }

  // let noJobsFoundClassName;

  // if (!(loading) && !(jobs)) {
  //   noJobsFoundClassName=""
  // } else {
  //   noJobsFoundClassName="hide"
  // }

  return (
    <Container className="col-12 m-0 p-0">
      <Header onResetView={handleResetView} />
      <div className="main-content col-10 offset-1">
        <div className={`${view === 'details' && 'hide'}`}>
          <SearchForm
            params={params}
            onParamChange={handleParamChange}
          />
          {loading && <h1 className="d-flex justify-content-center">Loading...</h1>}
          {error && <h1 className="d-flex justify-content-center">Error. Try Refreshing.</h1>}
          <div className="jobs-container col-12 d-flex flex-wrap justify-content-center">
            {jobs.map(job => {
              return <Job key={job.id} job={job} onItemClick={handleItemClick} />;
            })}
            {!loading && !jobs && <h1 className="d-flex justify-content-center">No jobs found, please try a different search.</h1>}
          </div>
          {jobs.length > 0 && (
            <div className="load-more d-flex justify-content-center">
              <Button onClick={loading ? null : handleLoadMoreJobs} disabled={loading} className={buttonClassName}>
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
        <div className={`${view === 'home' && 'hide'}`}>
          <JobDetails details={jobDetails} onResetView={handleResetView} />
        </div>
      </div>
      <div className={`${view === 'home' && 'hide'}`}>
        <Footer details={jobDetails} />
      </div>
    </Container>
  );
}