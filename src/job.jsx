import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

export default function Job({ job }) {
  return (
    <Card className="job-card d-flex justify-content-center m-3 h-100">
      <Card.Header className="job-logo">
        <img className="d-none d-md-block" height="50" width="50" src={job.company_logo} alt={job.company} />
      </Card.Header>
      <Card.Body className="job-body m-0">
          <Card.Subtitle className="job-date text-muted mb-2">
            {moment(new Date(job.created_at)).fromNow()} &#8226; {job.type}
          </Card.Subtitle>
          <div>
            <Card.Title className="job-title">
              {job.title}
            </Card.Title>
            <Card.Subtitle className="job-company my-3">
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Subtitle>
            <Card.Subtitle className="job-location font-weight-bold pt-3">
              {job.location}
            </Card.Subtitle>
          </div>
      </Card.Body>
    </Card>
  )
}
