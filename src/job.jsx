import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import moment from 'moment';
// import ReactMarkdown from 'react-markdown';

export default function Job({ job }) {
  return (
    <Card className="job-card d-flex justify-content-center m-3">
      <Card.Header>
        <img className="d-none d-md-block" height="50" width="50" src={job.company_logo} alt={job.company} />
      </Card.Header>
      <Card.Body>
          <Card.Subtitle className="text-muted mb-2">
            {moment(new Date(job.created_at)).fromNow()} &#8226; {job.type}
          </Card.Subtitle>
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            {/* <Badge variant="secondary" className="mr-2">{job.type}</Badge> */}
            <Badge variant="secondary text-break">{job.location}</Badge>
          </div>
      </Card.Body>
    </Card>
  )
}
