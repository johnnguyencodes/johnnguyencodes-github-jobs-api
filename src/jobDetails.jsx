import React from 'react';

export default function JobDetails({ details, onResetView }) {
  console.log(details);
  return (
    <div className="job-details">
      <div className="back-link">
        <a href="/#" onClick={onResetView}>
          Back to results
          </a>
        </div>
        <div>
          {details.type} / {details.location}
        </div>
    </div>
  )

}
