import React from 'react';

export default function JobDetails = ({ details, onResetPage }) => {
  return (
    <div className="job-details">
      <div className="back-link">
        <a href="/#" onClick={onResetPage}>
          $lt;$lt; Back to results
          </a>
        </div>
    </div>
  )

}
