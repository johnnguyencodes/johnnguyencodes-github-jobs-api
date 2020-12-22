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

  const handleLoadMoreJobs = () => {
    setPage(page + 1);
  };

  let jobDetails = {};
  if (view === 'details') {
    jobDetails = jobs.find(job => job.id === jobId);
  }

  const handleParamChange = event => {
    const param = event.target.name;
    const value = event.target.value;
    if (document.getElementById('geolocation').checked === false) {
      params.lat = '';
      params.long = '';
    }
    if (params.lat) {
      params.location = '';
    }
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <Container className="col-12 m-0 p-0">
      <Header onResetView={handleResetView} />
      <div className="main-content col-10 offset-1">
        <div className={`${view === 'details' && 'hide'}`}>
          <SearchForm
            params={params}
            onParamChange={handleParamChange}
          />
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error. Try Refreshing.</h1>}
          <div className="jobs-container col-12 d-flex flex-wrap justify-content-center">
            {jobs.map(job => {
              return <Job key={job.id} job={job} onItemClick={handleItemClick} />;
            })}
          </div>
          {jobs.length > 0 && (
            <div className="load-more d-flex justify-content-center">
              <Button onClick={loading ? null : handleLoadMoreJobs} disabled={loading} className={`${loading ? 'disabled' : 'text-white font-weight-bold mb-4 btn-outline-none'}`}>
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