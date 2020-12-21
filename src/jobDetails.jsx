import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'react-bootstrap';

export default function JobDetails({ details, onResetView }) {

  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply
  } = details;


  let string = company;
  let companyInitial;
  if (string) {
    companyInitial = string.substring(0, 1);
  }

  return (
    <div className="job-details-container col-10 offset-1">
      <div className="back-link">
        <a href="/#" onClick={onResetView}>
          &lt;&lt; Back to results
          </a>
        </div>
        <header className="details-header m-0 p-0 bg-white row">
          {company_logo
            ? <img className="d-none d-md-block details-company-logo"
              height="150" width="150" src={company_logo} alt={company} />
            : <h1 className="m-0 p-0"><span
                    className="badge details-badge font-weight-bold
                      text-white details-company-logo d-flex justify-content-center
                      align-items-center m-0 p-0">
                        {companyInitial ? companyInitial : ''}
              </span></h1>}
          <div className="details-header-body col-10 offset-1 d-flex
            justify-content-between align-items-between p-0 m-0">
            <div className="d-flex flex-column justify-content-center ml-5">
              <h1 className="font-weight-bold mb-3">{company}</h1>
              <p className="text-muted mt-3">{company_url}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button href={company_url} className="button-company-url purple font-weight-bold
                btn-outline-none">
                Company Site
              </Button>
            </div>
          </div>
        </header>
        <div>
          {type} / {location}
        </div>
        <div className="main-section">
          <div className="left-section">
            <div className="job-details-title">{title}</div>
            <hr/>
            <div className="job-details-description">
              <ReactMarkdown source={description} />
            </div>
          </div>
          <div className="right-section">
            <div className="company-details">
              <h3>About company</h3>
              <img src={company_logo} alt={company} className="job-details-logo" />
              <div className="job-details-company-name">{company}</div>
              <a href={company_url} className="job-details-company-url">
                {company_url}
              </a>
            </div>
            <div className="job-details-how-to-apply">
              <h3>How to apply</h3>
              <ReactMarkdown source={how_to_apply} />
            </div>
          </div>
        </div>
    </div>
  );
};
