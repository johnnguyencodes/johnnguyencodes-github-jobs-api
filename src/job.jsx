import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

export default function Job({ job }) {
  return (
    <Card className="job-card col-3 offset-1 m-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Posted {moment(new Date(job.created_at)).fromNow()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type}</Badge>
            <Badge variant="secondary" style={{ wordBreak: 'break-all' }}>{job.location}</Badge>
          </div>
          <img className="d-none d-md-block" height="50" width="50" src={job.company_logo} alt={job.company} />
        </div>
      </Card.Body>
    </Card>
  )
}
