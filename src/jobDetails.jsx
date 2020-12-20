import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function JobDetails({ details, onResetView }) {
  console.log(details);

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

  return (
    <div className="job-details-container">
      <div className="back-link">
        <a href="/#" onClick={onResetView}>
          &lt;&lt; Back to results
          </a>
        </div>
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
