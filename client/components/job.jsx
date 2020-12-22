import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

export default function Job({ job, onItemClick }) {
  const string = job.company;
  const companyInitial = string.substring(0, 1);
  return (
    <Card className="job-card d-flex justify-content-center mx-3 my-4 h-100 border-0" onClick={() => onItemClick(job.id)}>
      <Card.Body className="job-card-body pt-5 mt-2">
        {job.company_logo ? <img className="d-none d-md-block company-logo" height="50" width="50" src={job.company_logo} alt={job.company} />
          : <h1><span className="badge job-badge font-weight-bold text-white company-logo d-flex justify-content-center align-items-center">{companyInitial}</span></h1> }
        <Card.Subtitle className="job-card-date text-muted font-weight-bold mb-2">
          {moment(new Date(job.created_at)).fromNow()} &#8226; {job.type}
        </Card.Subtitle>
        <div>
          <Card.Title className="job-card-title font-weight-bold mt-4 mb-3">
            {job.title}
          </Card.Title>
          <Card.Subtitle className="job-card-company mt-4">
            <span className="text-muted font-weight-light font-weight-bold">
              {job.company}
            </span>
          </Card.Subtitle>
          <Card.Subtitle className="job-card-location font-weight-bold mt-4 purple">
            {job.location}
          </Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
  );
}
